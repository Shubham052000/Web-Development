import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { setDoc, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";
import "react-quill/dist/quill.snow.css";

type TextEditorProps = {};

const TextEditor = (props: TextEditorProps) => {
  const quillRef = useRef<ReactQuill>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const isLocalChange = useRef<boolean>(false);

  const documentRef = doc(db, "documents", "sample-doc");

  const saveContent = () => {
    if (quillRef.current && isLocalChange.current) {
      const content = quillRef.current.getEditor().getContents();
      console.log("Saving content: ", content);

      setDoc(documentRef, { content: content.ops }, { merge: true })
        .then(() => {
          console.log("Content saved!");
        })
        .catch((error) => {
          console.error("Error saving content: ", error);
        });
      isLocalChange.current = false;
    }
  };

  useEffect(() => {
    // Load initial content from firestore DB
    if (quillRef.current) {
      getDoc(documentRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const savedContent = docSnap.data().content;
            if (savedContent) {
              quillRef.current?.getEditor().setContents(savedContent);
            }
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });

      // Listen to firestore for any updates and update locally in real-time

      const unsubscribe = onSnapshot(documentRef, (snapshot) => {
        if (snapshot.exists()) {
          const updatedContent = snapshot.data().content;
          if (!isEditing) {
            const editor = quillRef.current?.getEditor();
            const currentCursorPosition = editor?.getSelection()?.index || 0;

            editor?.setContents(updatedContent, "silent");
            editor?.setSelection(currentCursorPosition, "silent");
          }
        }
      });

      // Listen for local text changes and save it to firestore

      const editor = quillRef.current.getEditor();
      editor.on("text-change", (delta: any, oldDelta: any, source: any) => {
        console.log("Text change!");
        if (source === "user") {
          isLocalChange.current = true;

          setIsEditing(true);
          saveContent();

          setTimeout(() => {
            setIsEditing(false);
          }, 5000);
        }
      });

      return () => {
        unsubscribe();
        editor.off("text-change");
      };
    }
  }, []);

  return (
    <div className="google-docs-editor">
      <ReactQuill ref={quillRef} />
    </div>
  );
};

export default TextEditor;

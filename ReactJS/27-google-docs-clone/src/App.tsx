import { useEffect } from "react";
import { auth } from "../firebase-config";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import TextEditor from "./components/TextEditor";

function App() {
  useEffect(() => {
    signInAnonymously(auth).catch((error) => {
      console.log(error);
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user signed in: ", user.uid);
      }
    });
  }, []);
  return (
    <div className="App">
      <header>
        <h1>Google Docs Clone</h1>
      </header>
      <TextEditor />
    </div>
  );
}

export default App;

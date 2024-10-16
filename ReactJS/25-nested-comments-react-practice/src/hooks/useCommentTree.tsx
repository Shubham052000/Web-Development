import { useState } from "react";
import { Comment } from "../components/NestedComments";

export default function useCommentTree(initialComments: Comment[]) {
  const [comments, setComments] = useState(initialComments);

  const insertNode = (tree: Comment[], commentId: number, content: Comment) => {
    return tree.map((comment): any => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: comment.replies ? [content, ...comment.replies] : [content],
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: insertNode(comment.replies, commentId, content),
        };
      }
      return comment;
    });
  };

  const insertComment = (commentId: number | undefined, content: string) => {
    const newComment: Comment = {
      id: Date.now(),
      content,
      votes: 0,
      timestamp: new Date().toISOString(),
      replies: [],
    };
    if (commentId) {
      setComments((prevComments) =>
        insertNode(prevComments, commentId, newComment)
      );
    } else {
      setComments((prevComments) => [newComment, ...prevComments]);
    }
  };

  const editNode = (
    tree: Comment[],
    commentId: number,
    content: string
  ): Comment[] => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          content: content,
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: editNode(comment.replies, commentId, content),
        };
      }
      return comment;
    });
  };

  const editComment = (commentId: number, content: string) => {
    setComments((prevComments) => editNode(prevComments, commentId, content));
  };

  const deleteNode = (tree: Comment[], commentId: number): Comment[] => {
    return tree.reduce((acc, comment) => {
      if (comment.id === commentId) {
        return acc;
      } else if (comment.replies && comment.replies.length > 0) {
        return [
          ...acc,
          {
            ...comment,
            replies: deleteNode(comment.replies, commentId),
          },
        ];
      } else {
        return [...acc, comment];
      }
    }, [] as Comment[]);
  };
  const deleteComment = (commentId: number) => {
    console.log(deleteNode(comments, commentId));
    setComments((prevComments) => deleteNode(prevComments, commentId));
  };

  return {
    comments,
    insertComment,
    editComment,
    deleteComment,
  };
}

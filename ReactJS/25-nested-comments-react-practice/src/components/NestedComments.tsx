import { TextareaHTMLAttributes, useState } from "react";
import useCommentTree from "../hooks/useCommentTree";
import "./styles.css";
import Comment from "./Comment";

export type Comment = {
  id: number;
  content: string;
  votes: number;
  timestamp: string;
  replies?: Comment[];
};

type Props = {
  comments: Comment[];
  // onSubmit: () => void;
  // onEdit: () => void;
  // onDelete: () => void;
  // onUpvote: () => void;
  // onDownvote: () => void;
};

const NestedComments = ({ comments }: Props) => {
  const [comment, setComment] = useState("");
  const {
    comments: commentsData,
    insertComment,
    editComment,
    deleteComment,
  } = useCommentTree(comments);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    if (comment.trim() !== "") {
      handleReply(undefined, comment);
      setComment("");
    }
  };

  const handleReply = (commentId: number | undefined, content: string) => {
    insertComment(commentId, content);
  };

  const handleDelete = (commentId: number) => {
    deleteComment(commentId);
  };

  return (
    <>
      <div className="add-comment">
        <textarea
          rows={3}
          cols={50}
          onChange={handleChange}
          value={comment}
          className="comment-textarea"
          placeholder="Add a new comment..."
        />
        <button className="comment-button" onClick={handleSubmit}>
          Add Comment
        </button>
      </div>
      {commentsData.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            onSubmitComment={handleReply}
            onEditComment={editComment}
            onDeleteComment={handleDelete}
          />
        );
      })}
    </>
  );
};

export default NestedComments;

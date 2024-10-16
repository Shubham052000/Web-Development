import { useState } from "react";
import { Comment as CommentType } from "./NestedComments";

type Props = {
  comment: CommentType;
  onSubmitComment: (id: number | undefined, content: string) => void;
  onEditComment: (id: number, content: string) => void;
  onDeleteComment: (id: number) => void;
};

const Comment = ({
  comment,
  onSubmitComment,
  onEditComment,
  onDeleteComment,
}: Props) => {
  const [expand, setExpand] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyContent(e.target.value);
  };

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const handleReplySubmit = () => {
    if (replyContent.trim() !== "") {
      onSubmitComment(comment.id, replyContent);
      setReplyContent("");
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim() !== "") onEditComment(comment.id, e.target.value);
  };
  return (
    <div className="comment">
      <>
        {isEditing ? (
          <div className="add-comment">
            <textarea
              rows={3}
              cols={50}
              onChange={handleEdit}
              value={comment.content}
              className="comment-textarea"
              placeholder="Add a new comment..."
            />
            <button className="comment-button" onClick={toggleEdit}>
              Save
            </button>
          </div>
        ) : (
          <p className="comment-content">{comment.content}</p>
        )}
        <p className="comment-info">Votes: {comment.votes}</p>
        <p className="comment-info">
          {new Date(comment.timestamp).toLocaleString()}
        </p>
      </>

      <div className="comment-actions">
        <button className="comment-button" onClick={toggleExpand}>
          {expand ? "Hide Replies" : "Reply"}
        </button>
        <button className="comment-button" onClick={toggleEdit}>
          Edit
        </button>
        <button
          className="comment-button"
          onClick={() => {
            onDeleteComment(comment.id);
          }}
        >
          Delete
        </button>
      </div>
      {expand && (
        <div className="comment-replies">
          <div className="add-comment">
            <textarea
              rows={3}
              cols={50}
              onChange={handleChange}
              value={replyContent}
              className="comment-textarea"
              placeholder="Add a new comment..."
            />
            <button className="comment-button" onClick={handleReplySubmit}>
              Add Reply
            </button>
          </div>
          {comment.replies?.map((reply) => {
            return (
              <Comment
                key={reply.id}
                comment={reply}
                onSubmitComment={onSubmitComment}
                onDeleteComment={onDeleteComment}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;

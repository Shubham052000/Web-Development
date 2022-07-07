import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const sortComments = (comments) => {
  return comments.sort((commentA, commentB) => {
    return commentA.id < commentB.id ? 1 : -1;
  });
};

const CommentsList = (props) => {
  const sortedComments = sortComments(props.comments);
  return (
    <ul className={classes.comments}>
      {sortedComments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;

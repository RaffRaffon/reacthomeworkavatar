
import './Comment.css';

function Comment(props) {
  return (
    <div className="Comment">
      <p>{props.author} {props.date} {props.content}</p>
    </div>
  );
}

export default Comment;
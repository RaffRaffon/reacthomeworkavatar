
import './CommentList.css';
import Comment from './Comment/Comment'

function CommentList(props) {
  return (
    <div className="CommentList">
      <Comment author="Raphael" date="19/12/2020" content="Fizz"/><Comment author="Itshak" date="5/6/2020" content="Buzz"/><Comment author="Aharon" date="7/6/2020" content="Yup Yup"/>
    </div>
  );
}

export default CommentList;
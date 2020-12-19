import './Article.css';
import CommentList from './CommentList/CommentList'

function Article(props) {
  return (
    <div className="Article">
      <CommentList/>
    </div>
  );
}

export default Article;


import './Avatar.css';

function Avatar(props) {
  return (
    <div className="Avatar">
      <img src={props.url} width={props.width} shape={props.shape}></img>
    </div>
  );
}

export default Avatar;

import './App.css';
import Avatar from './Avatar/Avatar'
import Article from './Article/Article'
function App() {
  return (
    <div className="App">
      <Avatar url="https://upload.wikimedia.org/wikipedia/commons/8/8c/K2%2C_Mount_Godwin_Austen%2C_Chogori%2C_Savage_Mountain.jpg"
        width="200px" shape="circle"/>
        
        <Article title="something" content="something" image="something"/>
    
    </div>
  );
}

export default App;

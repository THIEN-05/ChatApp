
import './App.css';
import io from 'socket.io-client';

// Tạo đối tượng kết nối đến server 
io.connect('http://localhost:3000');


function App() {

  const sendMessage = () => {



  };
  return (
    <div className="App">
      <input placeholder='Input here' />
      <button onClick={sendMessage}>Submit</button>
    </div>
  );
}

export default App;

import './App.css';
import io from 'socket.io-client'
import { useEffect } from 'react'

// Tạo đối tượng kết nối đến server 
const socket = io.connect('http://localhost:5000');


function App() {

  const sendMessage = () => {

    socket.emit("sendMessage", "hello");

  };

  // Chạy mỗi khi giá trị socket được gửi tới từ server
  useEffect(() => {

    socket.on("receiveMessage", (data) => {
      alert(data);
    })

  }, []);

  return (
    <div className="App">
      <input placeholder='Input here' />
      <button onClick={sendMessage}>Submit</button>
    </div>
  );
}

export default App;

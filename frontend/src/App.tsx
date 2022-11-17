import { useEffect, useState } from 'react';
import { sendMsg, connect } from './api/index';
import ChatHistory from './components/ChatHistory';
import Header from './components/Header';

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log('new message is received');
      setChatHistory([...chatHistory, { data: msg.data }]);
    });
  });

  function send() {
    sendMsg('hi');
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>Send</button>
    </div>
  );
}

export default App;

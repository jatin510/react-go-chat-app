import { useEffect, useState } from 'react';
import { sendMsg, connect } from './api/index';
import ChatHistory from './components/ChatHistory';
import Header from './components/Header';

function App() {
  const [chatHistory, setChatHistory] = useState([
    { data: 'hello' },
    { data: 'world' },
    { data: 'hi from jatin' },
  ]);

  useEffect(() => {
    connect((msg) => {
      console.log('new message is received');
      setChatHistory([...chatHistory, msg]);
    });
  }, []);

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

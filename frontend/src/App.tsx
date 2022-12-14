import { useEffect, useState } from 'react';
import { sendMsg, connect } from './api/index';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';
import Header from './components/Header';

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log('new message is received');
      setChatHistory([...chatHistory, { data: msg.data }]);
    });
  });

  function handleSend(event) {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = '';
    }
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput onSend={handleSend} />
      {/* <button onClick={send}>Send</button> */}
    </div>
  );
}

export default App;

import { sendMsg, connect } from './api/index';

function App() {
  function send() {
    console.log('send message');
    sendMsg('hello');
  }

  console.log('hello');

  return (
    <div className="App">
      <button onClick={send}>Send</button>
    </div>
  );
}

export default App;

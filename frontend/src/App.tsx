import { sendMsg, connect } from './api/index';
import Header from './components/Header';

function App() {
  function send() {
    console.log('send message');
    sendMsg('hello');
  }

  console.log('hello');

  return (
    <div className="App">
      <Header />
      <button onClick={send}>Send</button>
    </div>
  );
}

export default App;

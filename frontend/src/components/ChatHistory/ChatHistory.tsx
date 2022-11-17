import Message from '../Message';
import './ChatHistory.scss';

export default function ChatHistory(props) {
  const { chatHistory } = props;

  const messages = chatHistory.map((msg) => <Message message={msg.data} />);

  return (
    <>
      <div className="ChatHistory">
        <h2>Chat History</h2>
        {messages}
      </div>
    </>
  );
}

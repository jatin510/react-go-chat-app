import './ChatInput.scss';

export default function ChatInput(props) {
  const { onSend } = props;

  return (
    <div className="ChatInput">
      <input
        onKeyDown={onSend}
        placeholder="Type a message.. Hit Enter to Send"
      />
    </div>
  );
}

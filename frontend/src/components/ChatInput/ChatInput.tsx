import './ChatInput.scss';

export default function ChatInput(props) {
  const { send } = props;

  return (
    <div className="ChatInput">
      <input onKeyDown={send} />
    </div>
  );
}

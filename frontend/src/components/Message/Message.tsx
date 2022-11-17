import { useState } from 'react';
import './Message.scss';

export default function Message(props) {
  const { message: temp } = props;

  const [message, setMessage] = useState(JSON.parse(temp));
  return <div className="Message">{message.body}</div>;
}

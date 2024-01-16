import { useState, useEffect } from 'react';
import ToastMessage from '../ToastMessage';

import { Container } from './styles';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAssToast(event) {
      const { type, text } = event.detail;

      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    document.addEventListener('addtoast', handleAssToast);

    return () => {
      document.removeEventListener('addtoast', handleAssToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          type={message.type}
          text={message.text}
        />
      ))}
    </Container>
  );
}

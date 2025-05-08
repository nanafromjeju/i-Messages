import { Client } from '@stomp/stompjs';
import { useCallback, useEffect, useState } from 'react';
import SockJS from 'sockjs-client';

interface ChatMessage {
  roomId: string;
  content: string;
  senderId?: string;
  userId?: string;
  createdAt?: string;
}

const API_URL = 'http://13.125.89.9:8080';

export const useChat = (roomId?: string) => {
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connectSocket = () => {
      const socket = new SockJS(`${API_URL}/ws/chat`);
      const client = new Client({
        webSocketFactory: () => socket,
        debug: str => {
          console.log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });

      client.onConnect = frame => {
        setConnected(true);
        console.log('Connected: ' + frame);

        client.subscribe(`/sub/chat/${roomId}`, message => {
          const receivedMessage = JSON.parse(message.body);
          setMessages(prevMessages => [...prevMessages, receivedMessage]);
        });
      };

      client.onStompError = frame => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      };

      client.activate();
      setStompClient(client);
    };

    connectSocket();

    return () => {
      if (stompClient) {
        stompClient.deactivate();
      }
    };
  }, [roomId]);

  const sendMessage = useCallback(() => {
    if (stompClient && message) {
      stompClient.publish({
        destination: '/pub/chat',
        body: JSON.stringify({
          roomId: roomId,
          content: message,
          sender: 'User',
          timestamp: new Date().toISOString(),
        }),
      });

      setMessage('');
    }
  }, [stompClient, message, roomId]);

  return {
    connected,
    messages,
    message,
    setMessage,
    sendMessage,
  };
};

export default useChat;

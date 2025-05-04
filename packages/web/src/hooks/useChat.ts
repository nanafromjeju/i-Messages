import { Client } from '@stomp/stompjs';
import { useCallback, useEffect, useState } from 'react';

interface ChatMessage {
  roomId: string;
  content: string;
  senderId?: string;
  userId?: string;
  createdAt?: string;
}

const WS_URL = 'ws://13.125.89.9:8080';

export const useChat = (roomId?: string) => {
  const [client, setClient] = useState<Client | null>(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // STOMP 클라이언트 생성
    const stompClient = new Client({
      brokerURL: `${WS_URL}/ws/chat`,
      debug: function (str) {
        console.log('STOMP: ' + str);
      },
      reconnectDelay: 5000,
    });

    // 연결 성공 핸들러
    stompClient.onConnect = frame => {
      console.log('STOMP 연결 성공:', frame);
      setConnected(true);

      // 채팅방 구독
      if (roomId) {
        const subscription = stompClient.subscribe(`/sub/chat/${roomId}`, message => {
          try {
            const receivedMessage = JSON.parse(message.body) as ChatMessage;
            console.log('메시지 수신:', receivedMessage);
            setMessages(prev => [...prev, receivedMessage]);
          } catch (e) {
            console.error('메시지 파싱 오류:', e);
          }
        });

        console.log(`채팅방 ${roomId} 구독 성공:`, subscription);
      }
    };

    // 연결 에러 핸들러
    stompClient.onStompError = frame => {
      console.error('STOMP 에러:', frame.headers['message']);
      console.error('추가 정보:', frame.body);
      setConnected(false);
    };

    // 연결 종료 핸들러
    stompClient.onWebSocketClose = event => {
      console.log('WebSocket 연결 종료:', event);
      setConnected(false);
    };

    // WebSocket 에러 핸들러
    stompClient.onWebSocketError = event => {
      console.error('WebSocket 에러:', event);
    };

    // 연결 시작
    console.log('STOMP 연결 시작...');
    stompClient.activate();
    setClient(stompClient);

    // 컴포넌트 언마운트 시 정리
    return () => {
      console.log('STOMP 연결 해제...');
      if (stompClient.active) {
        stompClient.deactivate();
      }
      setClient(null);
    };
  }, [roomId]);

  // 메시지 전송 함수
  const sendMessage = useCallback(
    (content: string) => {
      if (!client || !client.active || !roomId) {
        console.log('메시지 전송 실패: 연결되지 않음');
        return false;
      }

      try {
        client.publish({
          destination: '/pub/chat/',
          body: JSON.stringify({
            roomId,
            content,
          }),
        });
        console.log('메시지 전송 성공');
        return true;
      } catch (error) {
        console.error('메시지 전송 오류:', error);
        return false;
      }
    },
    [client, roomId]
  );

  return { connected, messages, sendMessage };
};

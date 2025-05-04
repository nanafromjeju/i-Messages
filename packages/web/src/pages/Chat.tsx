import { Button } from "@/components/common/ui/button";
import { Input } from "@/components/common/ui/input";
import { useChat } from "@/hooks/useChat";
import { useState } from "react";

const Chat = () => {
  const [newMessage, setNewMessage] = useState("");
  const { connected, messages, sendMessage } = useChat();

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div>
      {connected ? "🟢 연결됨" : "🔴 연결 중..."}
      <div>
        {messages.length === 0 ? (
          <p>아직 메시지가 없습니다.</p>
        ) : (
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>
                <p>{msg.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        placeholder="메시지를 입력하세요..."
        disabled={!connected}
      />
      <Button onClick={handleSendMessage} disabled={!connected}>
        전송
      </Button>
    </div>
  );
};

export default Chat;

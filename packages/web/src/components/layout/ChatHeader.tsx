import BaseAvatar from "../common/BaseAvatar";

interface ChatHeaderProps {
  avatar: React.ReactNode;
  name: string;
}

const ChatHeader = ({ avatar, name }: ChatHeaderProps) => {
  return (
    <div>
      {avatar ? avatar : <BaseAvatar />}
      {name}
    </div>
  );
};

export default ChatHeader;

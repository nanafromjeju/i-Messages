interface ChatHeaderProps {
  avatar: React.ReactNode;
  name: string;
}

const ChatHeader = ({ avatar, name }: ChatHeaderProps) => {
  return (
    <div>
      {avatar ? avatar : ""}
      {name}
    </div>
  );
};

export default ChatHeader;

interface CreateButtonProps {
  onClick: () => void;
}

const CreateButton = ({ onClick }: CreateButtonProps) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      icon
    </div>
  );
};

export default CreateButton;

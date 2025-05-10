import { Button } from '../common/ui/button';

interface CreateButtonProps {
  onClick: () => void;
}

const CreateButton = ({ onClick }: CreateButtonProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '40px',
      }}
    >
      <Button
        onClick={onClick}
        style={{
          backgroundColor: '#007AFF',
          color: '#ffffff',
          justifyContent: 'center',
          padding: '8px',
          width: '100%',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <p style={{ fontSize: '16px' }}>방 생성</p>
      </Button>
    </div>
  );
};

export default CreateButton;

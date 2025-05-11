import { Button } from '../common/ui/button';

const SignInButton = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Button
        style={{
          backgroundColor: '#007AFF',
          color: '#ffffff',
          justifyContent: 'center',
          padding: '8px',
          width: '100%',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <p style={{ fontSize: '16px' }}>로그인</p>
      </Button>
    </div>
  );
};

export default SignInButton;

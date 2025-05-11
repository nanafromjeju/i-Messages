import { Input } from '../common/ui/input';

const SignInContent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Input
        placeholder="아이디"
        style={{
          backgroundColor: '#E6E6E7',
          border: 'none',
          borderRadius: '6px',
          height: '36px',
          padding: '10px',
        }}
      />
      <Input
        placeholder="비밀번호"
        style={{
          backgroundColor: '#E6E6E7',
          border: 'none',
          borderRadius: '6px',
          height: '36px',
          padding: '10px',
        }}
      />
    </div>
  );
};

export default SignInContent;

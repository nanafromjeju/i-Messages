import { Input } from '../common/ui/input';

const ListHeader = () => {
  return (
    <div style={{ backgroundColor: '#F9F9F9', padding: '16px' }}>
      <h1
        style={{
          color: '#222222',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        Messages
      </h1>
      <Input
        style={{
          backgroundColor: '#E6E6E7',
          border: 'none',
          width: '100%',
          height: '36px',
        }}
      />
    </div>
  );
};

export default ListHeader;

import { Input } from '../common/ui/input';

const Header = () => {
  return (
    <div>
      <h1 className="font-primary font-bold mb-18" style={{ fontSize: '2.25rem' }}>
        Messages
      </h1>
      <Input />
    </div>
  );
};

export default Header;

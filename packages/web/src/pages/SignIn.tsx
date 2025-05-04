import { Button } from "../components/common/ui/button";
import { Input } from "../components/common/ui/input";

const SignIn = () => {
  return (
    <div>
      <h1>i-Messages</h1>
      <Input placeholder="ID" />
      <Input placeholder="Password" />
      <Button variant="outline">Button</Button>
    </div>
  );
};

export default SignIn;

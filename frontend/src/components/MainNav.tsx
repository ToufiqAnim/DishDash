import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant="ghost"
      className="font-bold  border-2 border-orange-500 text-lg text-orange-500  "
      onClick={async () => await loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default MainNav;

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';
import UserMenu from './UserMenu';

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex sace-x-2 items-center">
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <Button
          variant="ghost"
          className="font-bold  border-2 border-orange-500 text-lg text-orange-500  "
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;

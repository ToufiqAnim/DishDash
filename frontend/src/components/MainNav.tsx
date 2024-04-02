import { Button } from './ui/button';

const MainNav = () => {
  return (
    <Button
      variant="ghost"
      className="font-bold  border-2 hover:border-green-500 text-lg hover:text-green-500 hover:bg-white transition-all"
    >
      Log In
    </Button>
  );
};

export default MainNav;

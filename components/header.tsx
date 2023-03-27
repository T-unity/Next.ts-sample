import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../context/auth';
import { login } from '../lib/auth';
import Button from './button';
import UserMenu from './user-menu';

const Header = () => {

  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };

  return (
    <header className="border-b flex items-center h-14 px-4">
      <h1>
        <Link href="/">Site Title</Link>
      </h1>
      <span className="flex-1"></span>
      { user === null && !waiting && <Button onClick={signIn}>ログイン</Button> }
      {/* components/user-menu.tsx */}
      {user && <UserMenu />}
    </header>
  );
};

export default Header;

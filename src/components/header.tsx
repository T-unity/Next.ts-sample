import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b flex items-center h-14 px-4">
      <h1 className="font-logo pl-10 ml-10">
        <Link href="/">Site Title</Link>
      </h1>
    </header>
  );
};

export default Header;

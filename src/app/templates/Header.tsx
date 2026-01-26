import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600">Curry & Chat</h1>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-orange-600">
            Home
          </Link>
          <Link href="/Classes" className="text-gray-700 hover:text-orange-600">
            Classes
          </Link>
          <Link href="/Recipes" className="text-gray-700 hover:text-orange-600">
            Recipes
          </Link>
          <Link href="/About" className="text-gray-700 hover:text-orange-600">
            About
          </Link>
          <Link href="/Contact" className="text-gray-700 hover:text-orange-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

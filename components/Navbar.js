import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold">
          <Link href="/">PixelScribe</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}>
          <Link href="/" className="block px-4 py-2 md:inline md:px-4 hover:bg-purple-700 rounded">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 md:inline md:px-4 hover:bg-purple-700 rounded">
            About
          </Link>
          <Link href="/services" className="block px-4 py-2 md:inline md:px-4 hover:bg-purple-700 rounded">
            Services
          </Link>
          <Link href="/contact" className="block px-4 py-2 md:inline md:px-4 hover:bg-purple-700 rounded">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

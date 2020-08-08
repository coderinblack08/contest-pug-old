import * as React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white w-screen text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-semibold items-center text-gray-900 mb-4 md:mb-0">
            <img
              className="w-10"
              src={require('../../public/logo.svg')}
              alt="Contest Pug Logo"
            />
            <span className="ml-3 text-xl">Contest Pug</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-8 hover:text-gray-900">Our Message</a>
          </Link>
          <Link href="/team">
            <a className="mr-8 hover:text-gray-900">Our Team</a>
          </Link>
          <Link href="/login">
            <a className="mr-8 hover:text-gray-900">Login</a>
          </Link>
        </nav>
        <Link href="/register">
          <a className="inline-flex items-center bg-primary shadow-outline-blue text-white border-0 py-2 px-20 md:px-4 transition ease-in-out duration-500 hover:shadow-md focus:outline-none rounded text-base mt-4 md:mt-0">
            Get Started
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

import * as React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-10 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Insipring Contests <br /> Minus the Hassle
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Conest Pug delivers a platform for both educators and students to
            easily create and take contests while practicing social distancing.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link href="/register">
                <a className="w-full flex items-center justify-center shadow-md px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary hover:opacity-75 focus:outline-none transition duration-500 ease-in-out md:py-4 md:text-lg md:px-10">
                  Get started
                </a>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="/login">
                <a className="w-full flex items-center justify-center shadow-md px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary bg-white hover:opacity-75 focus:outline-none transition duration-500 ease-in-out md:py-4 md:text-lg md:px-10">
                  Dashboard
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="lg:max-w-sm xl:max-w-md hidden lg:block mt-20 xl:ml-20"
          src={require('../../public/images/teaching.svg')}
          alt="Placeholder"
        />
      </div>
    </div>
  );
};

export default Header;

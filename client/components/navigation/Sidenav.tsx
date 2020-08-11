import * as React from 'react';
import Link from 'next/link';
import useStore from '../../store';

const Sidenav: React.FC = () => {
  const user = useStore((state) => state.user);
  return (
    // <div>
    <div className="hidden lg:block h-screen w-full max-w-xs bg-white border-r border-gray-200">
      <Link href="/dashboard">
        <a className="flex title-font font-semibold items-center px-8 py-4 text-gray-900">
          <img
            className="w-10"
            src={require('../../public/logo.svg')}
            alt="Contest Pug Logo"
          />
          <span className="ml-3 text-xl">Contest Pug</span>
        </a>
      </Link>
      <nav className="flex flex-col px-5 py-2">
        <Link href="/dashboard">
          <a className="flex items-center text-gray-600 font-medium text-xl px-6 py-4 bg-gray-100 rounded-md">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="text-gray-600 w-6 h-6 mr-3"
              stroke="currentColor"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </a>
        </Link>
        <Link href="/search">
          <a className="flex items-center text-gray-600 font-medium text-xl px-6 py-4">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="text-gray-600 w-6 h-6 mr-3"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </a>
        </Link>
        <Link href="/contests">
          <a className="flex items-center text-gray-600 font-medium text-xl px-6 py-4">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="text-gray-600 w-6 h-6 mr-3"
              stroke="currentColor"
            >
              <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Contests
          </a>
        </Link>
        <Link href="/scores">
          <a className="flex items-center text-gray-600 font-medium text-xl px-6 py-4">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="text-gray-600 w-6 h-6 mr-3"
              stroke="currentColor"
            >
              <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            Scores
          </a>
        </Link>
      </nav>
      <div className="absolute bottom-0 max-w-xs w-full flex items-center bg-gray-100 p-5 border-t border-r border-gray-200">
        <div className="p-3 shadow-inner rounded-full flex items-center justify-center bg-gray-200">
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6 text-gray-600"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        {(() => {
          if (user) {
            return (
              <div className="flex flex-col ml-3">
                <h2 className="text-gray-800 font-medium text-lg leading-none">
                  {user.name}
                </h2>
                <p className="text-gray-700 text-md">
                  @{user.name.toLowerCase().trim().split(' ').join('')}
                </p>
              </div>
            );
          }
        })()}
        <div className="ml-auto cursor-pointer">
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-gray-500 hover:text-gray-600"
            stroke="currentColor"
          >
            <path d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

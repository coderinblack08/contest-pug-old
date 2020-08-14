import * as React from 'react';
import Sidenav from '../components/navigation/Sidenav';
import MobileSidenav from '../components/navigation/MobileSidenav';
import Statistics from '../components/shared/Statistics';
import Link from 'next/link';

const Contests: React.FC = () => {
  return (
    <div className="flex bg-gray-100">
      <Sidenav />
      <MobileSidenav />
      <div className="w-full h-screen overflow-y-scroll">
        <header className="flex flex-col sm:flex-row items-center justify-between px-10 bg-white py-5 sm:py-0 sm:h-24 w-full border-b border-gray-200">
          <div className="flex items-center">
            <Statistics />
          </div>
          <Link href="/actions/create">
            <button className="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none focus:shadow-outline-blue bg-gray-100 border border-gray-200 py-3 px-5 text-gray-600 font-medium">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="view-grid-add w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
              New Contest
            </button>
          </Link>
        </header>
        {/* Seperator for mobile screens (so that bottom nav does not cover content) */}
        <div className="block lg:hidden h-32"></div>
      </div>
    </div>
  );
};

export default Contests;

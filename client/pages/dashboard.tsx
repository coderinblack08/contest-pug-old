import * as React from 'react';
import Sidenav from '../components/navigation/Sidenav';
import MobileSidenav from '../components/navigation/MobileSidenav';
import Card from '../components/dashboard/Card';

const Dashboard: React.FC = () => {
  return (
    <div className="flex bg-gray-100">
      <Sidenav />
      <MobileSidenav />
      <div className="w-full h-screen overflow-y-scroll">
        <header className="flex items-center justify-between px-10 bg-white h-24 w-full border-b border-gray-200">
          <div className="hidden sm:flex items-center">
            <div className="p-3 rounded-full flex items-center justify-center bg-gray-200">
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
            <div className="ml-3">
              <h2 className="text-gray-800 font-medium text-lg leading-none">
                John Doe
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-center pr-8 border-r">
              <div className="flex items-center">
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-gray-700 mr-2"
                  stroke="currentColor"
                >
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <h2 className="text-gray-700 text-2xl font-medium leading-none">
                  85%
                </h2>
              </div>
              <div className="text-gray-600 font-medium leading-snug">
                Average
              </div>
            </div>
            <div className="flex flex-col items-center pl-8">
              <div className="flex items-center">
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="text-gray-700 w-6 h-6 mr-2"
                  stroke="currentColor"
                >
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h2 className="text-gray-700 text-2xl font-medium leading-none">
                  17
                </h2>
              </div>
              <div className="text-gray-600 font-medium leading-snug">
                Contests
              </div>
            </div>
          </div>
        </header>
        <div className="p-10">
          <h1 className="flex items-center text-gray-800 font-semibold text-2xl leading-none mb-5">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="hidden sm:block w-6 h-6 text-gray-800 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
            Upcoming Contests
          </h1>
          <div className="flex flex-wrap">
            <Card name="Mathcounts" color="blue" date="August 12, 2020" />
            <Card
              name="Harvard MIT Tornument"
              color="green"
              date="August 20, 2020"
            />
            <Card name="React Smackdown" color="pink" date="August 12, 2020" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

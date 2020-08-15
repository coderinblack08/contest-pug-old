import * as React from 'react';
import { useGet } from 'figbird';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import Sidenav from '../../components/navigation/Sidenav';
import MobileSidenav from '../../components/navigation/MobileSidenav';
import Statistics from '../../components/shared/Statistics';
import Link from 'next/link';

const getMonthString = (date: Date) => {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthList[date.getMonth()] + ' ';
};

const formatDate = (start: string, end: string) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const startDate = new Date(end).toLocaleDateString('en', options);
  const endDate = new Date(start).toLocaleDateString('en', options);
  if (startDate && endDate) {
    if (new Date(start).getMonth() === new Date(end).getMonth()) {
      if (new Date(start).getDay() === new Date(end).getDay()) {
        return (
          getMonthString(new Date(start)) +
          new Date(start).getDay() +
          ', ' +
          new Date(start).getFullYear()
        );
      } else {
        return (
          getMonthString(new Date(start)) +
          new Date(start).getDay() +
          ' - ' +
          new Date(end).getDay() +
          ', ' +
          new Date(start).getFullYear()
        );
      }
    }
  }
  return startDate + ' - ' + endDate;
};

const Contest: React.FC = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, isFetching } = useGet('contests', id);

  const iff = (value: string) => {
    if (!data) {
      return '';
    } else {
      return data[value];
    }
  };

  return (
    <div className="flex bg-gray-100">
      <Sidenav />
      <MobileSidenav />
      <div className="w-full h-screen overflow-y-scroll">
        <header className="flex flex-col sm:flex-row items-center justify-between px-10 bg-white py-5 sm:py-0 sm:h-24 w-full border-b border-gray-200">
          <nav className="font-medium inline-flex space-x-10 items-center text-gray-600 text-lg">
            <Link href={`/contest/${id}`}>
              <a className="text-gray-700 bg-gray-200 rounded px-5 py-2">
                Homepage
              </a>
            </Link>
            <Link href={`/contest/${id}`}>
              <a>Leaderboard</a>
            </Link>
            <Link href={`/contest/${id}`}>
              <a>Forum</a>
            </Link>
          </nav>
          <div className="flex items-center">
            <Statistics />
          </div>
        </header>
        {(() => {
          if (!isFetching) {
            return (
              <div className="m-5 sm:m-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-5">
                  <div>
                    <h1 className="text-gray-700 font-semibold text-2xl">
                      {iff('name')}
                    </h1>
                    <p className="flex items-center text-gray-500 font-medium text-lg">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="tag w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      {iff('tag')}
                      {' • ' + formatDate(iff('start_date'), iff('end_date'))}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 md:mt-0 sm:space-x-4">
                    <button
                      type="button"
                      className="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none shadow bg-white text-gray-600 font-medium"
                    >
                      <div className="flex items-center bg-gray-100 border-r py-3 px-4">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="star w-5 h-5 mr-2"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        3
                      </div>
                      <div className="py-3 px-4">Star Contest</div>
                    </button>
                    <button
                      type="button"
                      className="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none shadow bg-primary py-3 px-5 text-white font-medium"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="view-grid-add w-4 h-4 mr-2"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
                      </svg>
                      Join Contest
                    </button>
                  </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-between w-full bg-white px-8 py-12 shadow rounded-md">
                  <div>
                    <article className="prose lg:prose-md">
                      <h3>Description</h3>
                      <ReactMarkdown source={data.description} />
                    </article>
                  </div>
                  <div className="pb-8 lg:pb-0 lg:px-8">
                    <article className="prose lg:prose-md space-y-6">
                      <h3 className="flex items-center">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="users w-5 h-5 mr-2"
                        >
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        Participants
                        <span className="font-normal ml-2 text-sm text-gray-800 bg-gray-300 px-2 rounded-full">
                          20
                        </span>
                      </h3>
                      <h3 className="flex flex-col">
                        <div className="flex items-center">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="external-link w-5 h-5 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Website
                        </div>
                        <a
                          href={iff('website')}
                          className="text-lg font-normal"
                        >
                          {iff('website')}
                        </a>
                      </h3>
                      <h3 className="flex flex-col">
                        <div className="flex items-center">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="mail w-5 h-5 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          Email Address
                        </div>
                        <a
                          href={'mailto:' + iff('email')}
                          className="text-lg font-normal"
                        >
                          {iff('email')}
                        </a>
                      </h3>
                    </article>
                  </div>
                </div>
              </div>
            );
          }
        })()}
        {/* Seperator for mobile screens (so that bottom nav does not cover content) */}
        <div className="block lg:hidden h-32"></div>
      </div>
    </div>
  );
};

export default Contest;

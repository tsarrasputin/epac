import React from 'react'
import { Banner, Button } from 'flowbite-react';
import { logo } from '../Images';
import { HiX } from 'react-icons/hi';

function Recruit() {
  return (
    <Banner>
    <div className="fixed left-1/2 top-6 z-50 flex w-[calc(100%-2rem)] -translate-x-1/2 flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
      <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
        <a
          href="#"
          className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4"
        >
          <img src={logo} className="mr-2 h-6" alt="EPAC Logo" />
          <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">EPAC</span>
        </a>
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          Join The EPAC
        </p>
      </div>
      <div className="flex flex-shrink-0 items-center">
        <Button href="#" size="sm">Sign up</Button>
        <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </div>
  </Banner>
  )
}

export default Recruit
import { Home } from '@mui/icons-material';
import React from 'react';

const Breadcrumb = ({ path }) => {
  return (
    <div className="flex items-center text-gray-500 text-sm space-x-2 ">
       <Home/>
      <span>Home</span>
      <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
      <span>{path}</span>
    </div>
  );
};

export default Breadcrumb;

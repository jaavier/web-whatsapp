import React from 'react';

export default function Search() {
  return (
    <div className="flex items-center h-10">
      <div className="bg-gray-200 h-full py-2 px-4 rounded-l-lg">
        <i className="fa fa-search" />
      </div>
      <div className="h-full w-full">
        <input className="bg-gray-200 w-full h-full rounded-r-lg p-2 text-sm outline-none" type="text" placeholder="Search" />
      </div>
    </div>
  );
}

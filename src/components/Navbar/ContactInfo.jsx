import React from 'react';

export default function Navbar() {
  return (
    <>
      <div className="flex items-center p-4">
        <div className="h-9 w-9 bg-white rounded-full">&nbsp;</div>
        <div>
          <div className="px-4">ContactName</div>
        </div>
      </div>
      <div className="flex items-center justify-center pr-8 text-gray-500">
        <div className="px-4">
          <i className="fa fa-search" />
        </div>
        <div className="px-2">
          <i className="fa fa-solid fa-ellipsis-v" />
        </div>
      </div>
    </>
  );
}

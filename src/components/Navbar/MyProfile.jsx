import React from 'react';

export default function MyProfile() {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <div className="h-9 w-9 bg-white rounded-full">&nbsp;</div>
      </div>
      <div className="flex text-gray-500">
        <div className="px-2">
          <i className="fa fa-solid fa-comment" />
        </div>
        <div className="px-2">
          <i className="fa fa-solid fa-ellipsis-v" />
        </div>
      </div>
    </div>
  );
}

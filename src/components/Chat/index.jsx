import React from 'react';

export default function Chat() {
  return (
    <>
      <div className="bg-gray-100 grow p-4">
        Messages
      </div>
      <div className="bg-gray-200 p-3 w-full grow absolute bottom-0">
        <div className="flex items-center text-gray-600">
          <div className="px-2">
            <i className="fa fa-smile" />
          </div>
          <div className="ml-3 px-2">
            <i className="fa fa-paperclip" />
          </div>
          <div className="ml-3 w-full">
            <input
              className="bg-gray-50 w-full rounded-lg p-2 px-4 text-sm"
              type="text"
              placeholder="Write a message"
            />
          </div>
          <div className="ml-3 px-2">
            <i className="fa fa-microphone" />
          </div>
        </div>
      </div>
    </>
  );
}

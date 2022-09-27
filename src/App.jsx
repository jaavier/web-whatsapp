import React from 'react';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="md:hidden sm:block">
        <div className="text-center">Responsive not available</div>
      </div>
      <div className="md:block sm:hidden">
        <div className="border-b flex items-center bg-gray-200">
          <Navbar />
        </div>
        <div className="flex h-screen">
          <div className="w-1/3 border-r">
            <Sidebar />
          </div>
          <div className="w-full relative flex">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

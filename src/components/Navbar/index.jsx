import React from 'react';
import MyProfile from './MyProfile';
import ContactInfo from './ContactInfo';

export default function Navbar() {
  return (
    <>
      <div className="w-1/3 border-r border-gray-300">
        <MyProfile />
      </div>
      <div className="w-full flex items-center justify-between">
        <ContactInfo />
      </div>
    </>
  );
}

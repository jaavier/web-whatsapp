import React from 'react';
import ContactsList from './ContactsList';
import Search from './Search';

export default function Sidebar() {
  return (
    <>
      <div className="w-full p-4 border-b">
        <Search />
      </div>
      <div className="">
        <ContactsList />
      </div>
    </>
  );
}

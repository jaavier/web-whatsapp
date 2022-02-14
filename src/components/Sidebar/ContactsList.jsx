import React from 'react';

const contacts = [{
  name: 'John Doe',
  avatar: 'https://random.imagecdn.app/500/150/',
  lastMessage: 'Hello, how are you?',
}, {
  name: 'Marie Curie',
  avatar: 'https://random.imagecdn.app/500/150/',
  lastMessage: 'See you',
}];

function Contact(props) {
  const { contact } = props;

  return (
    <li className="py-3 px-4 border-b hover:bg-gray-200">
      <div className="flex items-center relative">
        <div className="h-13 w-13">
          <img src="https://random.imagecdn.app/49/49" className="rounded-full" alt="avatar" />
        </div>
        <div className="">
          <div className="absolute right-0 top-1 text-xs text-gray-500">yesterday</div>
          <div className="px-4 font-semibold">{contact.name}</div>
          <div className="px-4 font-light text-sm text-gray-500">{contact.lastMessage}</div>
        </div>
      </div>
    </li>
  );
}

export default function ContactsList() {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.name} contact={contact} />
      ))}
    </ul>
  );
}

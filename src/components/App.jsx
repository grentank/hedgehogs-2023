import React from 'react';
import NavBar from './ui/NavBar';

export default function App({ children }) {
  console.log('APP');
  return (
    <div className="container">
      <NavBar />
      {children}
    </div>
  );
}

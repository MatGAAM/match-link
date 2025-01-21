import React from 'react';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';

console.log('to no arquivo home')

export const MyEvents: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <Header />
      </div>
      <div>Meus eventos</div>
      <div className="w-full fixed bottom-0">
        <Navbar />
      </div>
    </div>
  );
};

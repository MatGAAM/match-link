import React from 'react';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { CardEvent } from '../../components/CardEvent';

console.log('to no arquivo home')

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <Header />
      </div>
      <div className='grid grid-cols-4 gap-5 w-full'>
        <span className='col-span-4'>Eventos</span>
        <div className="col-span-3">input busca</div>
        <div className="col-span-1">filtro</div>
      </div>
      <div className="grid grid-cols-4 gap-5 px-5 pt-5 w-full pb-24 ">
        <div className="col-span-2 h-56">
          <CardEvent />
        </div>
        <div className="col-span-2 h-56">
          <CardEvent />
        </div>
        <div className="col-span-2 h-56">
          <CardEvent />
        </div>
        <div className="col-span-2 h-56">
          <CardEvent />
        </div>
        <div className="col-span-2 h-56">
          <CardEvent />
        </div>
        <div className="col-span-2 h-56">
          <CardEvent />
        </div>
        <div className="col-span-2 h-56">
          <CardEvent />
        </div>
        <div className="col-span-2 h-56">
          <CardEvent />
        </div>
      </div>
      <div className="w-full fixed bottom-0">
        <Navbar />
      </div>
    </div>
  );
};

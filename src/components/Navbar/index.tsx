import React from 'react';
import { Link } from 'react-router-dom';
import iconHome from '../../assets/icons/home.svg'
import iconEventos from '../../assets/icons/calendar_month.svg'
import iconAdd from '../../assets/icons/add.svg'
import iconBeneficios from '../../assets/icons/loyalty.svg'
import iconParceiro from '../../assets/icons/handshake.svg'
export const Navbar: React.FC = () => {
  return (
    <div className="flex justify-around items-center text-center bg-nv_background shadow-bottom h-[76px] text-sm">
      <div className='inline-flex px-1.5 flex-col justify-center items-center gap-1 '>
        <Link to="/" className=' '>
          <img src={iconHome} alt="" className='w-full h-6'/> 
          <span className="text-center text-[10px] font-normal leading-normal tracking-[0.1px] font-sans">
            Home
          </span>
        </Link>
      </div>
      <div className='inline-flex px-1.5 flex-col justify-center items-center gap-1 '>
        <Link to="/meus-eventos">
          <img src={iconEventos} alt="" className='w-full h-6'/> 
          <span className="text-center text-[10px] font-normal leading-normal tracking-[0.1px] font-sans">
            Meus eventos
          </span>
        </Link>
      </div>
      <div className='inline-flex px-1.5 flex-col justify-center items-center gap-1 '>
        <Link to="/">
          <img src={iconAdd} alt="" className='w-full h-6'/> 
          <span className="text-center text-[10px] font-normal leading-normal tracking-[0.1px] font-sans">
            Criar Evento
          </span>
        </Link>
      </div>
      <div className='inline-flex px-1.5 flex-col justify-center items-center gap-1 '>
        <Link to="/">
          <img src={iconBeneficios} alt="" className='w-full h-6'/> 
          <span className="text-center text-[10px] font-normal leading-normal tracking-[0.1px] font-sans">
            Benefícios
          </span>
        </Link>
      </div>
      <div className='inline-flex px-1.5 flex-col justify-center items-center gap-1 '>
        <Link to="/">
          <img src={iconParceiro} alt="" className='w-full h-6'/> 
          <span className="text-center text-[10px] font-normal leading-normal tracking-[0.1px] font-sans">
            Parceiro
          </span>
        </Link>
      </div>
    </div>
  );
};
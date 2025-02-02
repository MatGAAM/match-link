import React from 'react'
import imagem from '../../assets/sports/futebol.jpg'

export const CardEvent: React.FC = () => {
  return (
    <div className='relative w-full h-full rounded-lg overflow-hidden'>
      <div className="absolute inset-0">
        <img src={imagem} alt="Campo de futebol" className='object-cover relative w-full h-full'/>
        <div className="absolute inset-0 bg-custom-gradient"></div>
      </div>
      <div className="absolute bottom-1/4 p-4 text-white">
        <h2 className="text-xs font-bold">Bate bola com os brother</h2>
        <p className="text-xs">Futebol</p>
      </div>
      <div className="absolute bottom-7 p-4 text-white flex justify-center items-center">
        icon <h2 className="text-xs font-bold"> 01/12/2024 </h2>
      </div>
      <div className="absolute text-black bottom-0 w-full">
        <button className="bg-primary inline-flex w-full h-[28px] px-[12px] pr-[8px] pt-[6px] pb-[5px] justify-center items-center flex-shrink-0">
          Participar
        </button>
      </div>
    </div>
  )
}

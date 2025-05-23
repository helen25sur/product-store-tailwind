import React from 'react';
import { items } from '../data';

const Home = ({ onNavigate }) => {
  return (
    <div className='w-full h-full grid grid-cols-2 grid-rows-2 gap-4 bg-gray-50'>
      {
        items.map(i => (
          <div key={i.pageIndex} className="flex flex-col flex-grow items-center justify-center bg-white" onClick={() => onNavigate(i.pageIndex)}>
            <span className="text-xl font-bold bg-gradient-to-b from-red-500 to-yellow-300 bg-clip-text text-transparent tracking-wider mb-12">
              {i.label}
            </span>
            <img src={i.img} alt={i.label} className='max-w-[65%] max-h-[65%] object-contain' draggable='false' />
          </div>
        ))
      }

    </div>
  )
}

export default Home
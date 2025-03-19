'use client'

import { useState } from 'react';

export default function Toggle (){
  const [isToggle, setIsToggle] = useState(false);
  const handleClick=()=>{
    setIsToggle(
      prev => !prev 
    );
  };
  return(
    <>
      <button
        className={`${isToggle ? 'text-green-400' : 'bg-gray-400'}`}
        onClick={handleClick}
      >
        <p>{isToggle ? ON : OFF}</p>
      </button>
    </>
  );
};
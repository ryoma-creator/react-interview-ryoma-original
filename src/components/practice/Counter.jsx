'use client'

import { useState } from 'react';


const Counter = () => {

  const [state, setState] = useState(0);
  const plusHandleClick=()=>{
   setState(
    prev => prev + 1
   );
  };

  const minusHandleClick=()=>{
    setState(
     prev => Math.max(0, prev-1)
    );
   };

   const resetHandleClick=()=>{
    setState(0);
   }

    return(
    <>
      <button
        onClick={plusHandleClick}
        className='px-8 py-2 bg-green-400'
      >
        <p>+</p>
      </button>
      <button
        onClick={minusHandleClick}
        className='px-8 py-2 bg-red-400'
      >
        <p>-</p>
      </button>

      <p>counter: { state } </p>
      <button
        onClick={resetHandleClick}
        className='px-8 py-2 bg-red-400'
      >
        <p>reset</p>
      </button>
    </>
);
};

export default Counter ;
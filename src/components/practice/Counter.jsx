'use client'

import { useState } from 'react';

export default function Counter() {

    const [state, setState] = useState(0);
    
    const incrementClick=()=>{
      setState( prev => prev+1 );
    }
    const decrementClick=()=>{
        setState( prev=> Math.max(0, prev-1) );
    }
    const resetClick=()=>{
        setState(0);
    }
    

    return(
      <>
        <button
          className='p-4 bg-green-400'
          onClick={incrementClick}
        >
            Increment
        </button>
        <button
          className='p-4 bg-green-400'
          onClick={decrementClick}
        >
            Decrement
        </button>
        <button
          className='p-4 bg-green-400'
          onClick={resetClick}
        >
            Reset
        </button> 

        <p>counter: {state}</p>
      </>
    );
};
'use client'

import { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState (0);

  const handleIncrement = () => {
    setCount(
      (prev)=>(prev + 1)
    );
  };

  const handleDecrement = () => {
    setCount(
      ()=>(math.Max(0, count - 1))
    );
  };

  const handleReset = () => {
    setCount(0);
  };

  return(
    <>
      <button
        onClick={handleIncrement}
      >
        +
      </button>
      <button
       onClick={handleDecrement}
      >
        -
      </button>

       <p
        className={count >= 10 ? 'text-red-400' : ''}
       >count:{count}</p>

       <button
        onClick={handleReset}
        className='bg-red-400'
       >
        Reset Button
       </button>
    </>
  );
};

export default Counter;
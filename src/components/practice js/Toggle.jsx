'use client'

import { useState } from 'react';

const Toggle = () => {
  
  const [isToggle, setIsToggle] = useState (false);
  const [buttonCounter, setButtonCounter] = useState(0);
  
  const handleToggleChange = () => (
    setIsToggle(
      (prev) => (!prev)
    )
    setButtonCounter(
      (prev) => (prev +1)
  );

  const buttonInclement = () => {
  setButtonCounter(
    (prev) => (prev +1)
  )}

  return(
    <>
      <button
        className={`h-4 w-6 ${ isToggle ? 'bg-green-400' : 'bg-gray-400'}`} 
        onClick={handleToggleChange, buttonInclement}
      >
        { isToggle ? 'ON' : 'OFF' }
      </button>
      <p>Message: { isToggle ? 'Valid' : 'InValid'}</p>

      <p>Counter: {buttonCounter}</p>
    </>
  );
};

export default Toggle;
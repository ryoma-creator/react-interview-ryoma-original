'use client'

import { useState } from 'react';

const Toggle = () => {
  
  const [isToggle, setIsToggle] = useState (false);
  
  const handleToggleChange = () => (
    setIsToggle(
      (prev) => (!prev)
    )
  );
  return(
    <>
      <button
        className={`h-4 w-6 ${ isToggle ? 'bg-green-400' : 'bg-gray-400'}`} 
        onClick={handleToggleChange}
      >
        { isToggle ? 'ON' : 'OFF' }
      </button>
    </>
  );
};

export default Toggle;
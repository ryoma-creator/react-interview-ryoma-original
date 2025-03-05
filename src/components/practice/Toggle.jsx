'use client'

import { useState } from 'react';

export default function Toggle (){
  const [isToggled, setIsToggled]=useState(false);

  const handleClicked=()=>{
    setIsToggled(!isToggled);
  };

  return(
    <>
      <div>
        <button 
          onClick={handleClicked}
          className={`p-4 ${isToggled ? 'bg-green-500' : 'bg-red-500'}`}>
            {isToggled ? "On" : "Off"}
        </button>
      </div>
    </>
  );
};
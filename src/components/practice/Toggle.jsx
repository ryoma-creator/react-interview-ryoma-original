'use client'

import React from 'react';
import { useState } from 'react';

const Toggle = () => {
    const [toggleState, setToggleState] = useState(false);

    const handleToggleChange = () => {
        setToggleState(!toggleState);
    };


  return (
    <div>
        <button 
            onClick={handleToggleChange}
            className={`p-3 rounded-md
            ${toggleState ? "bg-green-400" : "bg-red-500" }
            `}>
          <p> {toggleState ? "ON" : "OFF" }</p> 
        </button>

    </div>
  );
};

export default Toggle;
'use client';

import { useState } from 'react';


export default function Counter() {

    const [state, setState]= useState(0);

    const incrementClick = () => {
        setState(prevState => prevState +1);
    };

    const decrement = () => {
        setState(prevState => prevState -1);
    };

    const reset = () => {
        setState(0);
    };

    return (
        <>
            <button
                className='bg-blue-500 rounded-md p-2 text-white'
                onClick={incrementClick}
            >
                plus button
            </button>
            <button
                className='bg-red-400 rounded-md p-2 text-white'
                onClick={decrement}
            >
                minus button
            </button>

            <p>count: {state}</p>


            <button
                className='bg-slate-500 rounded-md text-black'
                onClick={reset}
            >
                reset
            </button>


        </>

    )


}; 
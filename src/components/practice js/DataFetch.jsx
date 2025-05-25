'use client'

import { useState, useEffect } from 'react';

const FetchData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function Data(){
        try{
            const reponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await reponse.json();
            console.log(data);
            setData(data);
        }catch(error){
            console.error('error is happening!:', error);
            setError('error is happening!');
        }finally{
            setLoading(false);
        }
      }
      Data();
    },[]);

    if(error){
        return <div>{error}</div>
    }
    if(loading){
        return <div>now loading</div>
    }
    if(!data){
        return <div>data is nothing</div>
    }


    return(
        <>
          {data && 
          <div>{data.title}</div>
          }
        </>
    );
};

export default FetchData;
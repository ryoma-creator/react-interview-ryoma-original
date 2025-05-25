'use client'

import { useState } from 'react';

const Form = () => {
  const [inputData, setInputData] = useState({
    email:'',
    password:'',
})
  const [isError, setIsError] = useState(null)
  const [isSending, setIsSending] = useState(false)
  const [sent, SetIsSent] = useState(false)

  handleInputChange = (e) => {
    const [name, value] = e.target;
    setInputData({
      ...inputData,
      [name]:value
    })
  };

  handleSubmit = (e) => { 
    e.preventDefault();
    setIsSending(true)

    setIsError(
    {if(input.inputData.trim()){
        
    }

  })
    setIsSending(false)
  }

  if(error){

  }

  return(
    <>
      <form
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col items-start'>
          <label>email</label>
          <input 
            type="email" 
            name='email'
            value={inputData.email}
            onChange={handleInputChange}  
          />
          <label>password</label>
          <input 
            type="password" 
            name='password'
            value={inputData.password}
            onChange={handleInputChange}  
          />
          <button
           type='submit'
           disabled={isSending}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
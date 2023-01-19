import React from 'react'
import { useState } from 'react';

const FormNewsletter = () => {
  const [userInput, setUserInput] = useState('');
  const [customError, setCustomError] = useState('');
  const [customSuccess, setCustomSuccess] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }
  console.log(userInput)

  const handleSubmit = (e) => {
    e.preventDefault()

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      email: userInput
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:5000/Subscribe", requestOptions)
      .then(res => res.text())
      .then(result => {
        console.log(result, "subscribed")
        if (result === "") {
          setCustomSuccess("Subscribe Successfully");
          setUserInput('');
          setCustomError('');
        } else {
          return setCustomError(result)
        }
      })
      .catch(error => {
        console.log(error, "error")

      });
  }


  return (
    <form className="
    mt-12
    lg:my-auto
    lg:"onSubmit={handleSubmit} >
      <p className="text-paragraph w-full text-footerSubGrey2 mb-2 font-semibold ">
        Your Email Address
      </p>
      <div className="flex gap-10
      flex-col
      
      md:flex-row md:justify-between">
        <div className='flex flex-col'>
          <input required
            type="email"
            className={`border-footerInput rounded-md border-solid border  
          w-full h-[2.95rem] px-4 py-3

          xs:w-[21rem]  ${customError !== '' ? 'border-red1 text-red1 animate-[pulse.4s_ease-out]' : ''}
            `}
            onChange={handleChange}
            value={userInput}
          />
          {customError && <p className="text-red1 text-[0.85rem] font-semibold animate-[pulse_0.5s_ease-in-out">{customError}</p>}
          {customSuccess && <p className={`text-green1   text-[0.85rem] font-semibold animate-[pulse_0.5s]  ${customError !== '' ? 'hidden' : ''}`}>{customSuccess}</p>}
        </div>

        <button className=" bg-red2 text-white rounded-md w-[12.5rem] h-[2.95rem] px-10 py-3 shadow-lg" onSubmit={handleSubmit}>
          Subscribe
        </button>
      </div>

    </form >
  );
};

export default FormNewsletter;

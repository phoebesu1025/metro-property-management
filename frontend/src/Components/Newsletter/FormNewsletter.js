import React from 'react'
import { useState } from 'react';
import FormTitle from './FormTitle';
import SubscribeBtn from './SubscribeBtn';

const FormNewsletter = () => {
  const [userInput, setUserInput] = useState('');
  const [customError, setCustomError] = useState('');
  const [customSuccess, setCustomSuccess] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      email: userInput
    });
    const requestOptions = {
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
    <form className=" mt-12 lg:my-auto " onSubmit={handleSubmit} >
      <FormTitle />
      <div className="flex gap-10 flex-col md:flex-row md:justify-between">
        <div className='flex flex-col'>
          <input required

            className={`border-footerInput rounded-md border-solid border w-full h-[2.95rem] px-4 py-3
             xs:w-[21rem]  ${customError !== '' ? 'border-red1 text-red1 animate-[pulse_0.5s]' : ''}`}
            type="email"
            onChange={handleChange}
            value={userInput}
          />

          {customError && <p className="text-red1 text-[0.85rem] font-semibold animate-[pulse_0.5s]">{customError}</p>}
          {customSuccess && <p className={`text-green1 text-[0.85rem] font-semibold animate-[pulse_0.5s]  ${customError !== '' ? 'hidden' : ''}`}>{customSuccess}</p>}
        </div>

        <SubscribeBtn handleSubmit={handleSubmit} />

      </div>
    </form >
  );
};

export default FormNewsletter;

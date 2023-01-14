import React from 'react'
import { useState } from 'react';

const FormNewsletter = () => {
  const [userInput, setUserInput] = useState('');
  const [customError, setCustomError] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }

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
          alert('Subscribed successfully! 🎉🎉🎉');

          setUserInput('');
          setCustomError('')
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
      <p className="text-paragraph w-full text-footerSubGrey2 mb-2 ">
        Your Email Address
      </p>
      <div className="flex gap-10
      flex-col
      
      md:flex-row md:justify-between">
        <div className='flex flex-col'>
          <input required
            type="email"
            className="border-footerInput rounded-md border-solid border  
          w-full h-[2.95rem] px-4 py-3

          xs:w-[21rem] 
            "
            onChange={handleChange}
            value={userInput}
          />
          {customError && <p className="text-red1 font-semibold">{customError}</p>}
        </div>

        <button className=" bg-red2 text-white rounded-md w-[12.5rem] h-[2.95rem] px-10 py-3 shadow-lg" onSubmit={handleSubmit}>
          Subscribe
        </button>
      </div>

    </form >
  );
};

export default FormNewsletter;

import React from 'react'
import { useState } from 'react';

const FormNewsletter = () => {
  const [userInput, setUserInput] = useState('');
  const [post, setPost] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleClick = (e) => {
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
      .then(res => res.json())
      .then(result => {
        console.log(result, "subscribed")
        if (result.status == "ok") {
          alert('Subscribed successfully! 🎉🎉🎉');
        } else {
          alert('You\'already subscribed')
        }
      })
      .catch(error => console.log('error', error));
  }


  return (
    <form className="
    mt-12
    lg:my-auto
    lg:"onSubmit={handleClick} >
      <p className="text-paragraph w-full text-footerSubGrey2 mb-2 ">
        Your Email Address
      </p>
      <div className="flex gap-10
      flex-col  items-end 
      
      xs:flex-row xs:justify-between">
        <input required
          type="text"
          className="border-footerInput rounded-md border-solid border  
          w-full h-[2.95rem] px-4 py-3

          xs:w-[21rem] 
            "
          onChange={handleChange}
          value={userInput}
        />
        <button className=" bg-red2 text-white rounded-md w-[12.5rem] h-[2.95rem] px-10 py-3 " onSubmit={handleClick}>
          Subscribe
        </button>
      </div>
    </form >
  );
};

export default FormNewsletter;

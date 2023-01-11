import Swal from 'sweetalert2'
import React from 'react'
import { useState } from 'react'



const PopUpForm1 = () => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [preferInput, setPreferInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [popUp, setPopUp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            prefer: preferInput,
            message: messageInput
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        fetch("http://localhost:5000/sendMessage", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                setPopUp(result)

            })
            .catch(error => console.log('error', error));

        if (popUp.status !== "error") {

            Swal.fire({
                title: 'Thanks for your message',
                text: 'I will contact you soon. If you have any questions call me @ +21 245 6433',
                imageUrl: './images/propertyManagers/Steve-Johnson.png',
                imageAlt: 'Custom image',
                confirmButtonColor: '#d33'
            }).then(function () {
                document.location.reload()
            });
        }

    }

    return (
        <form className='mt-[1.5rem]' onSubmit={handleSubmit}>
            <div className='flex justify-between mb-[1.5rem]'>
                <label className='text-footerSubGrey2 text-[0.875rem]'>Name <span className='text-popUpStar'>*</span><br />
                    <input required type='text' placeholder='Type your name' className='w-[24.063rem] rounded-md  opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem]' onChange={(e) => setNameInput(e.target.value)} value={nameInput} /></label>

            </div>

            <div className='flex justify-between mb-[1.5rem]'>
                <label className='text-footerSubGrey2 text-[0.875rem]'>Your Email <span className='text-popUpStar'>*</span><br />
                    <input required type='email' placeholder='Type your email' className='w-[11.375rem] rounded-md  opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem]' onChange={(e) => setEmailInput(e.target.value)} value={emailInput} /></label>
                <label className='text-footerSubGrey2 text-[0.875rem]'>Phone number<br />
                    <input type="tel" pattern=".{8,}" placeholder='Type your phone number' className='w-[11.375rem] rounded-md opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem] ' onChange={(e) => setPhoneInput(e.target.value)} value={phoneInput} /></label>
            </div>

            <div className='mb-[1.5rem]'>
                <h1 className='text-footerSubGrey2 text-[0.875rem]'>Preferred means to reach you<span className='text-popUpStar'>*</span></h1>
                <div className='flex items-center'>
                    <input type="checkbox" className=' opacity-70  placeholder:text-buttonGrey placeholder:text-[0.75rem]  ' onChange={(e) => setPreferInput(e.target.value)} value={preferInput} /><label className='text-footerSubGrey2 text-[0.75rem] ml-2 mr-10' >Phone</label>

                    <input type="checkbox" className=' opacity-70  placeholder:text-buttonGrey placeholder:text-[0.75rem]  setPreferInput(e.target.value)} value={preferInput}' /><label className='text-footerSubGrey2 text-[0.75rem]  ml-2'>Email</label>
                </div>
            </div>

            <div>
                <label className='text-footerSubGrey2 text-[0.875rem]'> Message <span className='text-popUpStar'>*</span><br />
                    <textarea className='w-[24.06rem] h-[6.438rem] rounded-md opacity-70 mt-1' onChange={(e) => setMessageInput(e.target.value)} value={messageInput} required />
                </label>
            </div>

            <div className='flex mt-[1rem]'><button className='bg-red1 rounded-md  text-white text-[0.93rem] font-semibold w-[10.93rem] h-[2.93rem] mx-auto' onSubmit={handleSubmit}>Send</button>
            </div>
        </form>
    )
}

export default PopUpForm1
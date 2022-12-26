import React from 'react'
import { useState, useEffect } from 'react';
const JustTest = () => {
    const [showDB, setShowDB] = useState('');

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        fetch("http://localhost:5000/mongodb", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setShowDB(result)
            })
            .catch(error => console.log('error', error));
    }, [])



    return (
        <>
            <div className='text-center text-green-300 text-heading1 font-roboto'>TEST TAILWIND</div>
            <div className='text-center text-pink-300 text-heading2'>TEST TAILWIND</div>
            <div className='text-center text-blue-300 text-7xl'>TEST TAILWIND</div>
            <div className='text-center text-purple-300 text-paragraph'>TEST TAILWIND</div>
            <div className='text-center text-yellow-300 text-7xl'>TEST TAILWIND</div>
            <div className='text-center text-green-300 top mt-10 font-roboto'>
                <div> Below info is fetched from MongoDB 🎉🎉🎉</div>
                <div>{showDB.result}</div>

                {/* MongoDB is using array object to list items... */}

                {Array.from(showDB).map((element, index) => {
                    return (
                        <>

                            <div className='text-9xl'>
                                <h2>{element.message}</h2>
                            </div>

                        </>

                    )
                })}
            </div >





        </>
    )
}

export default JustTest
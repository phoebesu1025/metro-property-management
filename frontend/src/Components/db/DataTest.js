import React from 'react'
import { useState, useEffect } from 'react'
const DataTest = () => {
    const [showDB, setShowDB] = useState('');

    useEffect(() => {
        fetch("http://localhost:5000/")
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setShowDB(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className='text-center text-green-300 top mt-10'>
            <div> Below info is fetched from MongoDB 🎉🎉🎉</div>
            {/* MongoDB is using array object to list items... */}
            {Array.from(showDB).map((element, index) => {
                return (
                    <div className='text-9xl'>
                        <h2>{element.fname} {element.lname}</h2>
                    </div>
                )
            })}
        </div >
    )
}

export default DataTest
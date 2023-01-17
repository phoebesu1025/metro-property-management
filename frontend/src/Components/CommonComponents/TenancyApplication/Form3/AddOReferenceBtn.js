import React from 'react'

const AddOReferenceBtn = ({ pass }) => {
    return (
        <div className='lg:px-[10rem] mb-10 mt-3'>
            <button className='flex justify-around align-center px-[0.5rem] rounded-3xl border-buttonBorderGrey1 border-[0.052rem] w-[9.58rem] h-[1.92rem] 
        active:opacity-50 ' onClick={pass}>
                <p className='my-auto text-[0.729rem] font-semibold'>Add another reference</p>
                <img src="./images/tenancyApplication/plus.png" alt="plus" className='my-auto' />
            </button>
        </div>
    )
}

export default AddOReferenceBtn
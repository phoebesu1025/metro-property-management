import React from 'react'

const AddPLReferenceBtn = ({ pass }) => {
    return (
        <div>
            <div className='lg:px-[10rem] mb-[3rem] mt-3'>
                <button className='flex justify-around align-center px-[0.5rem] rounded-3xl border-buttonBorderGrey1 border-[0.052rem] w-[9.58rem] h-[1.92rem] active:opacity-50' onClick={pass}>
                    <p className='my-auto text-[0.729rem] font-semibold'>Add another landlord</p>
                    <img src="./images/tenancyApplication/plus.png" alt="plus" className='my-auto' />
                </button>
            </div>
        </div>
    )
}

export default AddPLReferenceBtn
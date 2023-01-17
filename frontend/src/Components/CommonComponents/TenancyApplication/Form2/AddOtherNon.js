import React from 'react'

const AddOtherNon = () => {
    return (
        <div>
            <div className='flex gap-8 lg:px-[10rem]'>

                <div className='mt-[1.5rem] mb-[3rem]'>
                    <button className='flex justify-between align-center px-[1.25rem] rounded-3xl border-buttonBorderGrey1 border-[0.052rem]  h-[2.448rem]           active:opacity-50'>
                        <p className='my-auto text-[0.729rem] font-semibold mr-5'>Add a Non-Tenant Applicant</p>
                        <img src="./images/tenancyApplication/plus.png" alt="plus" className='my-auto' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddOtherNon
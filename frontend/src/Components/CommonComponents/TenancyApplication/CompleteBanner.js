import React from 'react'

const CompleteBanner = () => {
    return (
        <div className='text-white bg-completeBg text-center h-[19rem] mx-[-0.2rem] flex flex-col justify-center gap-y-[3rem] '>
            <p className='text-[1.875rem] px-[17rem]'>With an investment property, you could have others paying off your mortgage and covering part of your current rental costs</p>

            <div className='flex justify-center gap-x-3'>
                <button className='bg-white text-black text-[0.729rem] w-[10.461rem] h-[2.449rem] rounded-md'>
                    Find Out More
                </button>

                <button className='bg-red1 text-[0.729rem] w-[10.461rem] h-[2.449rem] rounded-md'>
                    Talk to Mortgage Broker
                </button>

            </div>





        </div>
    )
}

export default CompleteBanner
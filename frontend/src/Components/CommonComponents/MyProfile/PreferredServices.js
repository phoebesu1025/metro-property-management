import React from 'react'

const PreferredServices = () => {
    return (
        <div className='bg-white shadow-lg w-[28.9rem] px-[4rem] py-[2rem] rounded-lg'>
            <h1 className='text-[1.25rem] font-bold mb-2'>Preferred Metro NZ Services</h1>
            <div className='text-[0.875rem] flex flex-col gap-2'>
                <div><input className="mr-3" type="checkbox" /><label>Rentals</label></div>

                <div><input className="mr-3" type="checkbox" /><label>Investment Properties</label></div>
                <div><input className="mr-3" type="checkbox" /><label>Property Management</label></div>
                <div><input className="mr-3" type="checkbox" /><label>Sell Tenanted Property</label></div>
            </div>
        </div >
    )
}

export default PreferredServices
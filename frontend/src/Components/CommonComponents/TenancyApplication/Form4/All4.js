import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './Heading'
import ReviewYourDetails from './ReviewYourDetails'
import ReviewCoApplicants from './ReviewCoApplicants'
import ReviewReferences from './ReviewReferences'
import SaveBtn from '../Common/SaveBtn'
import SubmitBtn from '../Common/SubmitBtn'

const All4 = () => {
    return (
        <>
            <Heading />

            <div className=' lg:px-[10rem]  flex flex-col flex-wrap h-[37rem]'>
                <ReviewYourDetails />
                <ReviewCoApplicants />
                <ReviewReferences />
            </div>

            <div className='lg:px-[10rem] flex  w-full justify-start'>

                <Link to="/login"><SaveBtn /></Link>
                <Link to="/tenancy-application-complete"><SubmitBtn /></Link>

            </div>
        </>
    )
}

export default All4
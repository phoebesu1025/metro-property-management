import React from 'react'
import ProcessBar4 from './Common/ProcessBar4'
import Heading from './Form4/Heading'
import ReviewYourDetails from './Form4/ReviewYourDetails'
import ReviewCoApplicants from './Form4/ReviewCoApplicants'
import ReviewReferences from './Form4/ReviewReferences'
import BackBtn from './Common/BackBtn'
import NextBtn from './Common/NextBtn'
import SaveBtn from './Common/SaveBtn'
import SubmitBtn from './Common/SubmitBtn'

const Reviews = () => {
    return (
        <>
            <ProcessBar4 />
            <Heading />

            <div className=' lg:px-[10rem]  flex flex-col flex-wrap h-[37rem]'>
                <ReviewYourDetails />
                <ReviewCoApplicants />
                <ReviewReferences />
            </div>

            <div className='lg:px-[10rem] flex  w-full justify-start'>
                <SaveBtn />
                <SubmitBtn />
            </div>






        </>
    )

}

export default Reviews
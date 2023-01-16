import React from 'react'
import { Link } from 'react-router-dom'
import TenancyApplicationBanner from './Common/TenancyApplicationBanner'

import ProcessBar2 from '../../../Components/CommonComponents/TenancyApplication/Common/ProcessBar2'
import CoApplicantsSection from './Form2/CoApplicants'
import CoApplicants1 from './Form2/CoApplicants1'
import BackBtn from './Common/BackBtn'
import NextBtn from './Common/NextBtn'
import OtherNonTenant from './Form2/OtherNonTenant'
const CoApplicants = () => {
    return (
        <div>
            <TenancyApplicationBanner />
            <ProcessBar2 />
            <CoApplicantsSection />
            <CoApplicants1 />
            <OtherNonTenant />





            <div className='flex justify-between mx-[10rem]'>

                <Link to="/tenancy-application-your-detail"><BackBtn /></Link>
                <Link to="/tenancy-application-references"><NextBtn /></Link>



            </div>























        </div>
    )
}

export default CoApplicants
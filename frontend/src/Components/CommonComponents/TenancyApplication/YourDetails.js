import React from 'react'
import ProcessBar1 from '../../CommonComponents/TenancyApplication/Common/ProcessBar1'
import Preferences from './Form1/Preferences'
import PersonalDetails from './Form1/PersonalDetails'
import ProofOfId from './Form1/ProofOfId'
import Pets from './Form1/Pets'
import Utilities from './Form1/Utilities'
import NextBtn from './Common/NextBtn'
import { Link } from 'react-router-dom'
import PropertyComponents from './PropertyComponents/PropertyComponents'
import PropertyListing from '../../../Pages/PropertySearch/PropertyListing/PropertyListing'
const YourDetails = () => {
    return (
        <div>
            <ProcessBar1 />
            <Preferences />
            <PersonalDetails />
            <ProofOfId />
            <Pets />
            <Utilities />
            <div className='mx-[10rem]'><Link to="/tenancy-application-co-applicants"> <NextBtn /></Link></div>
            <PropertyComponents />
            <PropertyListing />




















        </div >
    )
}

export default YourDetails
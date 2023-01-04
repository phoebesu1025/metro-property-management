import React from 'react'
import Header from "../../../Components/Header/Header"
import Footer from "../../../Components/Footer/Footer";
import Newsletter from "../../../Components/Newsletter/Newsletter";
import ImgBanner from '../../../Components/CommonComponents/ImgBanner/ImgBanner';
import MyProfileInfoNew from '../../../Components/CommonComponents/MyProfile/MyProfileInfoNew';
const NewUser = () => {
    return (
        <div>

            <MyProfileInfoNew />
            <ImgBanner />

        </div>
    )
}
export default NewUser
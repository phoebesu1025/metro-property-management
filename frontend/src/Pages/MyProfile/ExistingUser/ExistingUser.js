import React from 'react'
import Header from "../../../Components/Header/Header"
import Footer from "../../../Components/Footer/Footer";
import Newsletter from "../../../Components/Newsletter/Newsletter";
import ImgBanner from '../../../Components/CommonComponents/ImgBanner/ImgBanner';
import MyProfileInfoExist from '../../../Components/CommonComponents/MyProfile/MyProfileInfoExist';
const ExistingUser = () => {
    return (
        <div>

            <MyProfileInfoExist />
            <ImgBanner />

        </div>
    )
}
export default ExistingUser
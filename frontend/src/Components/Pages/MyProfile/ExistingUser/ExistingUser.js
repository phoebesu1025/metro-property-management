import React from 'react'
import Header from "../../../Header/Header"
import Footer from "../../../Footer/Footer";
import Newsletter from "../../../Newsletter/Newsletter";
import ImgBanner from '../../../CommonComponents/ImgBanner/ImgBanner';
import MyProfileInfoExist from '../../../CommonComponents/MyProfile/MyProfileInfoExist';
const ExistingUser = () => {
    return (
        <div>
            <Header />
            <MyProfileInfoExist />
            <ImgBanner />
            <Newsletter />
            <Footer />
        </div>
    )
}
export default ExistingUser
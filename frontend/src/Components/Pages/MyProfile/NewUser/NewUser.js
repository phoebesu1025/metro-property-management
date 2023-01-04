import React from 'react'
import Header from "../../../Header/Header"
import Footer from "../../../Footer/Footer";
import Newsletter from "../../../Newsletter/Newsletter";
import ImgBanner from '../../../CommonComponents/ImgBanner/ImgBanner';
import MyProfileInfoNew from '../../../CommonComponents/MyProfile/MyProfileInfoNew';
const NewUser = () => {
    return (
        <div>
            <Header />
            <MyProfileInfoNew />
            <ImgBanner />
            <Newsletter />
            <Footer />
        </div>
    )
}
export default NewUser
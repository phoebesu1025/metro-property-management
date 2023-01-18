import { React, useState, useContext } from 'react'
import LoggedUserContext from "../../Context/LoggedUserContext";
import Login from "../Login/Login"
import MdApplicationsMain from '../../Components/My Diary/MdApplicationsMain';



const Md3ApplicationsPage = () => {
    const [loggedUser, _] = useContext(LoggedUserContext);
    return (
        <div>{loggedUser !== null ? <MdApplicationsMain /> : <Login />}</div>
    )
}

export default Md3ApplicationsPage
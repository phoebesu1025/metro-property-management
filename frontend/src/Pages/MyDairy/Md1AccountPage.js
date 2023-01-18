import { React, useState, useContext } from 'react'
import LoggedUserContext from "../../Context/LoggedUserContext";
import Login from "../Login/Login"
import MdAccountMain from '../../Components/My Diary/MdAccountMain';



const Md1AccountPage = () => {
    const [loggedUser, _] = useContext(LoggedUserContext);
    return (
        <div>{loggedUser !== null ? <MdAccountMain /> : <Login />}</div>
    )
}

export default Md1AccountPage
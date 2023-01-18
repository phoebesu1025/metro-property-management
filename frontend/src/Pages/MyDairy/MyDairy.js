import { React, useState, useContext } from 'react'
import LoggedUserContext from "../../Context/LoggedUserContext";
import Login from "../Login/Login"
import Md1Account from './Md1AccountPage';

const MyDairy = () => {
    const [loggedUser, _] = useContext(LoggedUserContext);
    console.log(loggedUser)
    return (
        <>
            <div>{loggedUser !== null ? <Md1Account /> : <Login />}</div>
            <div>{loggedUser !== null ? <Md1Account /> : <Login />}</div>
            <div>{loggedUser !== null ? <Md1Account /> : <Login />}</div>



        </>
    )
}

export default MyDairy
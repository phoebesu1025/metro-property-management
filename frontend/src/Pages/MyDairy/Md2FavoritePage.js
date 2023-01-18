import { React, useState, useContext } from 'react'
import LoggedUserContext from "../../Context/LoggedUserContext";
import Login from "../Login/Login"
import MdFavoriteMain from '../../Components/My Diary/MdFavoriteMain';



const Md2FavoritePage = () => {
    const [loggedUser, _] = useContext(LoggedUserContext);
    return (
        <div>{loggedUser !== null ? <MdFavoriteMain /> : <Login />}</div>
    )
}

export default Md2FavoritePage
import Cookies from "js-cookie";
import React from "react";
import {Link} from "react-router-dom"

const ButtonLogout = () => {

    const handleLogout = () => {
        Cookies.remove('token');
    }

    return(
        <Link to="/">
                <button onClick={handleLogout} className="w-28 text-white rounded-2xl p-2 bg-orange hover:bg-opacity-80 hover:text-slate-700 text-center">Logout</button>
        </Link>
    )
}

export default ButtonLogout;

import React from "react";
import {Link} from 'react-router-dom';

const ButtonLogin = () => {

    return(
        <div>
            <Link to="/login">
                <button className="w-28 text-white rounded-2xl p-2 bg-orange hover:bg-opacity-80 hover:text-slate-700 text-center">Login</button>
            </Link>
        </div>
    )
}

export default  ButtonLogin;

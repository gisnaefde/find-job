import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom"
import ButtonLogin from "../Elements/ButtonLogin";
import buttonLogin from "../Elements/ButtonLogin";
import ButtonLogout from "../Elements/ButtonLogout";
import Logo from "../Assets/Images/logo.jpg";

const Navbar = () => {

    const onUlasan = () => {
        const element = document.getElementById("ulasan")
        element.scrollIntoView();
    }

    const onKenapaFJ = () => {
        const element = document.getElementById("kenapaFJ")
        element.scrollIntoView();
    }


    return (
        <nav className="bg-gray-200 py-2 mt-3 px-5 flex justify-between rounded-t-xl">
            <div className="flex">
                <div className=" rounded-full w-12 text-white">
                    <img src={Logo} className=" rounded-full"/>
                </div>
                <div className="font-Mulish flex items-center ">
                    <ul className="flex items-center ">
                        <li className="mx-7 hover:text-white cursor-pointer" onClick={onKenapaFJ}>
                            Kenapa Find Job
                        </li>
                        <li className="mx-7 hover:text-white cursor-pointer" onClick={onUlasan}>
                            Ulasan
                        </li>
                    </ul>
                </div>
            </div>
            <div className="font-Mulish flex items-center">
                <a className="mx-20 cursor-pointer hover:text-white">Job Vacancy</a>
                {
                    Cookies.get(`token`) ?
                        <Link to="/">
                            <ButtonLogout/>
                        </Link> :
                        <Link to="/login">
                            <ButtonLogin/>
                        </Link>
                }
            </div>

        </nav>
    )

}

export default Navbar;
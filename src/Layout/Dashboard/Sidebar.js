import React, { useState } from "react";
import {BiMenu} from "react-icons/bi";
import ButtonLogout from "../../Elements/ButtonLogout";
import Logo from "../../Assets/Images/logo.jpg";
import { Link } from "react-router-dom";

const Sidebar = (props) => {

    const [open, setOpen] = useState(true)
    const menus = [
        { title: "Dashboard", to:"/login"},
        { title: "Data List Table", to:"/login" },
        { title: "Add Job" , to:"/form-job"},
        { title: "Setting", to:"/changePassword"}
    ]

    return (
        <div className="relative">
        <div className="flex font-Mulish fixed top-0 left-0 ">
            <div className={`${open ? "w-72" : "w-0"} bg-white shadow-2xl h-screen relative duration-300`}>
                <div className="flex py-5 pl-9  bg-white border-b-4">
                    <img src={Logo} className="w-9 rounded-full"></img>
                    <p className={`${!open && "hidden duration-300"} text-2xl ml-5`}>Find Job</p>
                    <button className={`${open ? "absolute right-7" : "absolute -right-10"}  p-2 text-white absolute -right-12 text-xl font-bold rounded-xl hover:rounded-sm bg-abu duration-300`} onClick={() => { setOpen(!open) }}><BiMenu/></button>
                </div>
                <ul className=" mt-9 mx-5">
                    {menus.map((menu)=>(
                        <Link to = {menu.to}>
                            <li className={`${!open && "hidden"} py-3 px-10 my-4 hover:bg-slate-500 cursor-pointer rounded-full duration-300 hover:text-white`}>{menu.title}</li>
                        </Link>
                    ))}
                </ul>
                <div className={`${!open && "hidden duration-300"}  absolute bottom-10 ml-20 items-center`}>
                    <ButtonLogout/>
                </div>
            </div>
        </div>
        <div className={`${open ? "ml-80" : "ml-10"} duration-300 `}>
            {props.children}
        </div>
        </div>
    )
}

export default Sidebar;

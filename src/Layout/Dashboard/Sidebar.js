import React, { useState } from "react";
import {BiMenu} from "react-icons/bi";

const Sidebar = () => {

    const [open, setOpen] = useState(true)
    const menus = [
        { title: "Dashboard" },
        { title: "Data List Table" },
        { title: "Tambah" }
    ]

    return (
        <div className="flex font-Mulish">
            <div className={`${open ? "w-72" : "w-0"} bg-abu h-screen relative duration-300`}>
                <div className="flex py-5  bg-orange">
                    <p className={`${!open && "hidden duration-300"} text-2xl text-white ml-5`}>Find Job</p>
                    <button className={`p-2 text-white absolute -right-12 text-xl font-bold bg-abu`} onClick={() => { setOpen(!open) }}><BiMenu/></button>
                </div>
                <ul className="text-white mt-9 ">
                    {menus.map((menu)=>(
                        <li className={`${!open && "hidden"} py-3 px-5 my-4 hover:bg-slate-500`}>{menu.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;

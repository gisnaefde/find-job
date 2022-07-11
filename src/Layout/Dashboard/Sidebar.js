import React, { useState } from "react";

const Sidebar = () => {

    const [open, setOpen] = useState(true)
    const menus = [
        { title: "Dashboard" },
        { title: "Data List Table" },
        { title: "Tambah" }
    ]

    return (
        <div className="flex font-Mulish">
            <div className={`${open ? "w-72" : "w-20"} bg-abu h-screen relative duration-300`}>
                <div className="flex py-5 pl-5 bg-orange">
                    <p className={`${!open && "hidden duration-300"} text-2xl text-white ml-5`}>Find Job</p>
                    <button className={`p-2 text-white absolute rounded-full -right-3 text-xl font-bold bg-abu ${!open && "rotate-180 duration-300"}`} onClick={() => { setOpen(!open) }}>></button>
                </div>
                <ul className="text-white ml-4 mt-9">
                    {menus.map((menu)=>(
                        <li className={`${!open && "hidden"} my-4`}>{menu.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;

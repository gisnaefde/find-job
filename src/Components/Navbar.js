import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white mt-8 flex justify-between">
            <div className="flex">
                <div className="bg-green rounded-full w-7 text-white">
                    <p className="text-center">FJ</p>
                </div>
                <div className="font-Mulish">
                    <ul className="flex">
                        <li className="mx-7">
                            Temukan Lokasi
                        </li>
                        <li className="mx-7">
                            Jenis Ruang
                        </li>
                        <li className="mx-7">
                            Komunitas
                        </li>
                        <li className="mx-7">
                            Blog
                        </li>
                    </ul>
                </div>
            </div>
            <div className="font-Mulish">
                <button className="">Login</button>
            </div>

        </nav>
    )

}

export default Navbar;
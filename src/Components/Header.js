import React from "react";
import { Link } from 'react-router-dom'

import Img from "../Assets/Images/Bitmap.png"
import ComponentImg from "../Assets/Images/Dot Ornament.png";
import CardHeader from "../Elements/CardHeader";

const Header = () => {
    return (
        <div className="mt-7">
            <div className="">
                <img src={Img} className=" relative -right-36 rounded-2xl"/>
            </div>
            <div className="absolute h-17 top-36">
                <div className="relative z-30">
                    <div className="text-5xl font-bold mt-28">
                        <h1 className="mb-4">Temukan Pekerjaan </h1>
                        <h1>Impianmu Disini</h1>
                    </div>
                    <div className="mt-7">
                        <Link to="/job">
                            <CardHeader/>
                        </Link>
                    </div>
                </div>
                <img src={ComponentImg} className="relative z-10 -mt-6 -ml-6"/>
            </div>
        </div>
    )
}

export default Header;
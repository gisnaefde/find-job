import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import jwt from "jwt-decode";

const Profil = () => {


    useEffect(() => {
        const token = Cookies.get(`token`);
        const decoded = jwt(token);
        console.log(decoded);
    })

    return (
        <>
            <div className="mx-48">
                <Navbar />
                <div className="flex justify-center">
                    <div className="w-screen h-full mt-16 mb-16 bg-gray-200 shadow-xl rounded-xl px-16 py-10 ">
                        <div className="flex flex-col justify-center items-center">
                            <p>Ini Gambar</p>
                            <h1 className="text-center font-bold text-2xl font-oswald mt-7 ">Title</h1>
                            <div className="flex">
                                <p className="text-left">Name </p>
                                <p> City</p>
                            </div>
                        </div>
                        <div className="mt-10 ">
                            <h1 className="font-bold text-xl">Description</h1>
                            <div className="mt-4">
                                <h1 className="underline font-semibold text-md">Job Description</h1>
                                <p className="text-justify mt-2">Deskripsi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profil;

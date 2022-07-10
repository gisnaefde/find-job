import React from "react";

const Register = () => {
    return (
        <div className="mx-auto shadow-lg font-Mulish shadow-green w-1/4 h-90 mt-44">
            <div className="px-12 py-12 ">
                <p className="text-center text-2xl font-bold text-green">Register</p>
                <p className="text-center text-sm mt-3">Isi Data Diri Anda</p>
                <form className="text-abu mt-3 text-center">
                    <input className=" border-b-2 h-9 text-sm px-2" type="text" placeholder="Nama"></input>
                    <input className=" border-b-2 h-9 text-sm px-2" type="text" placeholder="Email"></input>
                    <input className=" border-b-2 h-9 text-sm px-2 focus:ring-blue-500" type="password" placeholder="Password"></input>
                    <button className="mt-3 w-20 bg-abu text-white text-sm rounded-md">Daftar</button>
                </form>
                <p className="text-center mt-6">Login</p>
            </div>
        </div>
    )
}

export default Register;

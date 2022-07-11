import React from "react";

const ChangePassword = () => {
    return(
        <div className="mx-auto shadow-lg font-Mulish shadow-green w-1/4 h-90 mt-44">
            <div className="px-12 py-12 ">
                <p className="text-center text-2xl font-bold text-green">Change Password</p>
                <p className="text-center text-sm mt-3">Masukan Password Baru Anda</p>
                <form className="text-abu mt-3 text-center">
                    <input className=" border-b-2 h-9 text-sm px-2" type="password" placeholder="New Password"></input>
                    <input className=" border-b-2 h-9 text-sm px-2 focus:ring-blue-500" type="password" placeholder="Confirm New Password"></input>
                    <button className="mt-3 w-20 bg-abu text-white text-sm rounded-md">Ok</button>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword;

import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../../Assets/Images/logo.jpg"

const ChangePassword = () => {

    const [token, setToken] = useState();
    useEffect ( ()=>{
        setToken(Cookies.get('token'))
    })


    const [input, setInput] = useState({
        current_password : "",
        new_password : "",
        new_confirm_password : ""
    });

    
    
    const handleChange = (event) => {
        setInput(event.target.value)
        console.log(input)
    }
    
    const handleChangePassword = async (event) => {
        event.preventDefault()
        const {current_password ,new_password, new_confirm_password} = input
        await axios.post(`https://dev-example.sanbercloud.com/api/change-password`, {
            current_password ,
            new_password, 
            new_confirm_password
        }, {headers : {
            "Authorization": 'Bearer' + token
        }})
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

    }

    return(
        <div className=" bg-gradient-to-b from-orange to-abu h-screen grid grid-cols-2">
            <div className="flex justify-center items-center">
                <img src={Logo} alt="/" className="rounded-full w-72"></img>
            </div>
            <div className="flex items-center ml-32">
                <div className="bg-white rounded-xl h-auto w-90 p-9">
                    <h1 className="text-center font-bold text-2xl text-orange">Change Password</h1>
                    <h1 className="text-center text-xs mt-3">Masukan Password Lama dan Baru</h1>
                    <form onSubmit={handleChangePassword} className="flex flex-col mt-5">
                        <input onChange={handleChange} value={input.current_password} name="current_password" type="password" placeholder="Password Lama" className="h-10 w-full border-2 my-2 rounded-2xl px-5 text-abu focus:border-none focus:outline-none focus:ring focus:ring-orange "></input>
                        <input onChange={handleChange} value={input.new_password} name="new_password" type="password" placeholder="Password Baru" className="h-10 w-full border-2 my-2 rounded-2xl px-5 text-abu focus:border-none focus:outline-none focus:ring focus:ring-orange "></input>
                        <input onChange={handleChange} value={input.new_confirm_password} name="new_confirm_password" type="password" placeholder="Konfirmasi Password" className="h-10 w-full border-2 my-2 rounded-2xl px-5 text-abu focus:border-none focus:outline-none focus:ring focus:ring-orange "></input>
                        <div className="flex mt-5 justify-between">
                            {/* <Link to="/login">   */}
                                <button className="text-center bg-orange hover:bg-slate-600 text-white text-bold h-8 w-24 rounded-2xl px-4 ">Submit</button>
                            {/* </Link> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;

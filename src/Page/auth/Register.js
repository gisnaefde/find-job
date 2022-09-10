import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import logo  from "../../Assets/Images/logo.jpg";

const Register = () => {

    const history = useNavigate();

    const [input, setInput] = useState({
        name : "",
        img_url : "",
        email : "",
        password : ""
    })

    const handleChange = (event) =>{
        const value = event.target.value
        const name = event.target.name

        setInput({...input, [name] : value})
    }

    const handleRegister = async (event) => {
        event.preventDefault()
        const {name , email , password, img_url} = input

        await axios.post(`https://dev-example.sanbercloud.com/api/register`, {name : name , email : email , password : password, img_url : img_url})
        .then((res)=>{
            console.log(res)
            history("/Login")

        }).catch((err)=>{
            console.log(err)
        })
        
    }

    return (
        <div className=" bg-gradient-to-b from-orange to-abu h-screen grid grid-cols-2">
            <div className="flex justify-center items-center">
                <img src={logo} alt="/" className="rounded-full w-72 sm:hidden md:block"></img>
            </div>
            <div className="flex items-center ml-32">
                <div className="bg-white rounded-xl h-auto w-90 p-9">
                    <h1 className="text-center font-bold text-2xl text-orange">Register</h1>
                    <h1 className="text-center text-xs mt-3">Masukan Data</h1>
                    <form onSubmit={handleRegister} className="flex flex-col mt-5">
                        <input onChange={handleChange} value={input.value} name="name" type="text" placeholder="nama" className="h-10 w-full border-2 my-2 rounded-2xl px-5 text-abu focus:border-none focus:outline-none focus:ring focus:ring-orange "></input>
                        <input onChange={handleChange} value={input.value} name="email" type="email" placeholder="email" className="h-10 w-full border-2 my-2 rounded-2xl px-5 text-abu focus:border-none focus:outline-none focus:ring focus:ring-orange"></input>
                        <input onChange={handleChange} value={input.value} name="password" type="password" placeholder="password" className="h-10 w-full border-2 my-2 rounded-2xl px-5 text-abu focus:border-none focus:outline-none focus:ring focus:ring-orange"></input>
                        <input onChange={handleChange} value={input.value} name="image_url" type="text" placeholder="link gambar" className="h-10 w-full border-2 my-2 rounded-2xl px-5 text-abu focus:border-none focus:outline-none focus:ring focus:ring-orange"></input>
                        <div className="flex flex-col mt-4 justify-center items-center">
                            <button className="text-center bg-orange hover:bg-slate-600 text-white text-bold h-8 w-24 rounded-2xl px-4 ">Register</button>
                            <Link to="/Login">
                                <p className="text-orange text-left font-bold text-md mt-5 cursor-pointer hover:text-abu">Login</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;

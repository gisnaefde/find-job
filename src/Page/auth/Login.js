import React, { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import {Link, useNavigate} from "react-router-dom";
import logo  from "../../Assets/Images/logo.jpg"

const Login = () => {
    const history =  useNavigate();

    const [input, setInput] = useState({
        email : "",
        password : ""
    })

    const handleChange = (event)=> {
        const value = event.target.value
        const name = event.target.name

        setInput ({...input, [name] : value})
        console.log(input)
    }

    const handleLogin = async(event) => {
        event.preventDefault()
        const {email , password} = input

        await axios.post(`https://dev-example.sanbercloud.com/api/login`, {email: email , password :password})
        .then((e)=> {
            const token = (e.data.token)
            // console.log(token)
            Cookies.set('token', token);
            history("/list-Job-Table")

        }).catch((err)=>{
            const error = err.request.status
            console.log(err)
            if(error == 400 ){
                history('/badRequest400')
            }
        })

    }


    return(
        <div className=" bg-gradient-to-b from-orange to-abu h-screen grid grid-cols-2">
            <div className="flex justify-center items-center">
                <img src={logo} alt="/" className="rounded-full w-72"></img>
            </div>
            <div className="flex items-center ml-32">
                <div className="bg-white rounded-xl h-auto w-90 p-9">
                    <h1 className="text-center font-bold text-2xl text-orange">LOGIN</h1>
                    <h1 className="text-center text-xs mt-3">Masukan Username dan Password</h1>
                    <form onSubmit={handleLogin} className="flex flex-col mt-5">
                        <input onChange={handleChange} value={input.value} name="email" type="email" placeholder="email" className="h-10 w-full border-2 my-2 rounded-2xl px-5 text-abu focus:border-none focus:outline-none focus:ring focus:ring-orange "></input>
                        <input onChange={handleChange} value={input.value} name="password" type="password" placeholder="password" className="h-10 w-full border-2 my-2 rounded-2xl px-5 text-abu focus:border-none focus:outline-none focus:ring focus:ring-orange "></input>
                        <Link to="/changePassword">
                            <p className="text-orange text-left font-bold text-md mt-5 cursor-pointer hover:text-abu">Change Password ?</p>
                        </Link>
                        <div className="flex mt-5 justify-between">
                            <button className="text-center bg-orange hover:bg-slate-600 text-white text-bold h-8 w-24 rounded-2xl px-4 ">Login</button>
                            <Link to="/Register">
                                <button className="text-center bg-slate-600 hover:bg-orange text-white text-bold h-8 w-24 rounded-2xl px-4 ">Signup</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        // <div className="mx-auto shadow-lg font-Mulish shadow-green w-1/4 h-90 mt-44">
        //     <div className="px-12 py-12">
        //         <p className="text-center text-2xl font-bold text-green">Login</p>
        //         <p className="text-center text-sm mt-3">Masukan Username dan Password</p>
        //         <form className="text-abu mt-3 text-center" onSubmit={handleLogin}>
        //             <input onChange={handleChange} value={input.email} name="email" className=" border-b-2 h-9 text-sm px-2" type="text" placeholder="email"></input>
        //             <input onChange={handleChange} value={input.password} name="password" className=" border-b-2 h-9 text-sm px-2 focus:ring-blue-500" type="password" placeholder="Password"></input>
        //             <button className="mt-3 w-20 bg-abu text-white text-sm rounded-md" type="submit">Login</button>
        //         </form>
        //         <Link to="/changePassword">
        //             <p className="text-center mt-6">Lupa Password</p>
        //         </Link>
        //         <Link to="/register">
        //             <p className="text-center mt-6">Register</p>
        //         </Link>
        //     </div>
        // </div>
    )
}

export default Login;

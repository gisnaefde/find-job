import React from "react";
import Header from "../Components/Header";
import KenapaFJ from "../Components/KenapaFJ";
import Navbar from "../Components/Navbar";

const Landing = () => {
    return(
        <div className=" mx-48">
            <Navbar/>
            <Header/>
            <KenapaFJ/>
        </div>
    )
}

export default Landing;
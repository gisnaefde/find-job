import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import KenapaFJ from "../Components/KenapaFJ";
import Navbar from "../Components/Navbar";
import Ulasan from "../Components/Ulasan";

const Landing = () => {
    return(
        <div className=" mx-48">
            <Navbar/>
            <Header/>
            <KenapaFJ/>
            <Ulasan/>
            <Footer/>
        </div>
    )
}

export default Landing;
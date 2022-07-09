import React from "react";
import Header from "../Components/Header";
import KenapaFJ from "../Components/KenapaFJ";
import JobVacancy from "../Components/JobVacancy";
import Navbar from "../Components/Navbar";
import Ulasan from "../Components/Ulasan";

const Landing = () => {
    return(
        <div className=" mx-48">
            <Navbar/>
            <Header/>
            <KenapaFJ/>
            <Ulasan/>
        </div>
    )
}

export default Landing;
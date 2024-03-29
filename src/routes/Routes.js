import React from "react";
import { BrowserRouter, Routes,Route,} from 'react-router-dom'
import ChangePassword from "../Page/auth/ChangePassword";
import Login from "../Page/auth/Login";
import Register from "../Page/auth/Register";
import Job from "../Page/Job";
import Landing from "../Page/Landing";
import BadRequest400 from "../Page/error/BadRequest400";
import SidebarLayout from "../Layout/Dashboard/SidebarLayout";
import DetailJob from "../Page/DetailJob";
import FormJob from "../Layout/Dashboard/FormJob";
import ListJobTable from "../Layout/Dashboard/ListJobTable";
import Profil from "../Page/Profil";

const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/changePassword" element={<ChangePassword/>}/>
                <Route path="/job" element={<Job/>}/>
                <Route path="/badRequest400" element={<BadRequest400/>}/>
                <Route path="/sidebarLayout" element={<SidebarLayout/>}/>
                <Route path="/detail-job/:id" element={<DetailJob/>}/>
                <Route path="/form-job" element={<FormJob/>}/>
                <Route path="/form-job/:id" element={<FormJob/>}/>
                <Route path="/list-Job-Table" element={<ListJobTable/>}/>
                <Route path="profil" element={<Profil/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;

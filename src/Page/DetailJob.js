import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const DetailJob = () => {
    const { id } = useParams()
    let [job, setJob] = useState()

    useEffect( () => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
        .then((res) => {
            const data = res.data
            setJob(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    

    const salaryMin = job.salary_min.toString().split('').reverse().join('');
    const ribuanMin = salaryMin.match(/\d{1,3}/g);
    const hasilMin = ribuanMin.join('.').split('').reverse().join('');

    const salaryMax = job.salary_min.toString().split('').reverse().join('');
    const ribuanMax = salaryMax.match(/\d{1,3}/g);
    const hasilMax = ribuanMax.join('.').split('').reverse().join('');

    return (
        <div className="mx-48">
            <Navbar />
            <div className="flex justify-center">
                <div className="w-screen h-full mt-16 mb-16 bg-gray-200 shadow-xl rounded-xl px-16 py-10 ">
                    <div className="flex flex-col justify-center items-center">
                        <img src={job.company_image_url} className="w-56 mt-4 rounded-md"></img>
                        <h1 className="text-center font-bold text-2xl font-oswald mt-7 ">{job.title}</h1>
                        <div className="flex">
                            <p className="text-left">{job.company_name} , </p>
                            <p> {job.company_city}</p>
                        </div>
                    </div>
                    <div className="mt-10 ">
                        <h1 className="font-bold text-xl">Description</h1>
                        <div className="mt-4">
                            <h1 className="underline font-semibold text-md">Job Description</h1>
                            <p className="text-justify mt-2">{job.job_description}</p>
                            <h1 className="underline font-semibold text-md mt-3">Qualification</h1>
                            <p className="text-justify">{job.job_qualification}</p>
                            <h1 className="underline font-semibold text-md mt-3">Tenure</h1>
                            <p className="text-justify">{job.job_tenure}</p>
                            <h1 className="underline font-semibold text-md mt-3">Type</h1>
                            <p className="text-justify">{job.job_type}</p>
                            <h1 className="underline font-semibold text-md mt-3">Salary</h1>
                            <p className="text-justify"> Rp. {hasilMin} - {hasilMax}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailJob;

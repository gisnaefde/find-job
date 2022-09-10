import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import jobImage from '../Assets/Images/logo.jpg'

const Job = () => {
    const history = useNavigate()

    const [job, setJob] = useState();
    const [status, setStatus] = useState(1)

    useEffect(() => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            .then((res) => {
                setJob(res.data.data);
                console.log(job);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleDetail = (event) => {
        const id = event.target.value
        history(`/detail-job/${id}`)
    }

    return (
        <div className=" mx-48">
            <Navbar />
            {/* <JobVacancy/> */}
            <div className="flex flex-col items-center">
                <h1 className="text-center mt-20 font-Mulish text-5xl font-bold text-blue-700">Temukan Pekerjaanmu Sekarang</h1>
                <hr className="bg-orange h-5 rounded-full w-3/4 text-center"></hr>
            </div>
            <div className="grid grid-cols-3">
            {
                job?.map((data, index) => {

                    //membuat titik dalam rupiah
                    const salaryMin = data.salary_min.toString().split('').reverse().join('');
                    const ribuanMin 	= salaryMin.match(/\d{1,3}/g);
                    const hasilMin	= ribuanMin.join('.').split('').reverse().join('');
                    
                    const salaryMax = data.salary_min.toString().split('').reverse().join('');
                    const ribuanMax 	= salaryMax.match(/\d{1,3}/g);
                    const hasilMax	= ribuanMax.join('.').split('').reverse().join('');
                    

                    return (
                        <div key={index} className="mx-4">
                            <div className="w-80 h-auto bg-gray-200 rounded-lg flex justify-center items-center px-3 py-3 mt-32">
                                <div className="bg-white w-full h-full px-2 py-2 shadow-slate-700 shadow-lg rounded-lg">
                                    <img src={data.company_image_url} className="w-full h-40 rounded-lg"></img>
                                    <h1 className="text-center font-Mulish font-bold text-lg text-blue-700 mt-3">{data.title}</h1>
                                    <p className="text-center text-xs font-oswald">{data.company_city}</p>
                                    <table className="font-oswald mt-3 text-sm ml-4">
                                        <tbody>
                                            <tr>
                                                <td className="font-bold">Company</td>
                                                <td className="pl-3 text-ellipsis overflow-hidden ...">{data.company_name}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-bold">Qualification</td>
                                                <td className="pl-3 text-clip overflow-hidden ...">{data.job_qualification}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-bold">Salary</td>
                                                <td className="pl-3"> Rp. {hasilMin} - {hasilMax}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-bold">Status</td>
                                                <td className="pl-3"> {status == data.job_status ? "Open" : "Close"} </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="flex justify-center mt-3">
                                        <button onClick={handleDetail} value={data.id} className="bg-orange hover:bg-abu w-20 h-9 text-center rounded-full text-white">Lihat</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>

            {/* <div className="w-80 h-auto bg-gray-200 rounded-lg flex justify-center items-center px-3 py-3 mt-32">
                <div className="bg-white w-full h-full px-2 py-2 shadow-slate-700 shadow-lg rounded-lg">
                    <img src={jobImage} className="w-full h-40 rounded-lg"></img>
                    <h1 className="text-center font-Mulish font-bold text-lg text-blue-700 mt-3">Job Name</h1>
                    <p className="text-center text-xs font-oswald">City</p>
                    <table className="font-oswald mt-3 text-sm ml-4">
                        <tr>
                            <td className="font-bold">Company</td>
                            <td className="pl-3">Mandiri</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Qualification</td>
                            <td className="pl-3">S1</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Salary</td>
                            <td className="pl-3"> Rp. 1000 - 20000</td>
                        </tr>
                    </table>
                    <div className="flex justify-center mt-3">
                        <div className="bg-red-500 w-20 h-9 text-center rounded-xl text-white">Status</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Job;

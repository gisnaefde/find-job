import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "./Sidebar";

const ListJobTable = () => {

    const navigate = useNavigate();
    const [token, setToken] = useState();
    const [job, setJob] = useState()

    useEffect(() => {
        setToken(Cookies.get('token'))
    })

    useEffect(() => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            .then((res) => {
                console.log(res.data)
                setJob(res.data.data)
                console.log(job)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const handleDetail = (event) => {
        const id = event.target.value;
        navigate(`/detail-job/${id}`)
    }
    const handleEdit = (event) => {
        const id = event.target.value;
        navigate(`/form-job/${id}`)
    }

    const handleDelete = (event) => {
        const id = event.target.value
        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
            headers: {
                "Authorization": "Bearer" + token
            }
        })
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        window.location.reload()
    }

    return (
        <>
            <Sidebar>
                <div className='mt-10 mb-10'>
                    <h1 className='text-center text-3xl font-bold'>List Job</h1>
                    <p className='mt-4 underline text-center'></p>
                    <div className="ml-10 mr-20">
                        <table className=" w-full mt-10 border-collapse border border-slate-500 text-sm rounded-full">
                            <thead className="bg-abu text-md text-center text-white uppercase">
                                <tr>
                                    <th className="py-3 px-5 border border-slate-600">Title</th>
                                    <th className="py-3 px-5 border border-slate-600">Company Name</th>
                                    <th className="py-3 px-5 border border-slate-600">Type</th>
                                    <th className="py-3 px-5 border border-slate-600">Tenure</th>
                                    <th className="py-3 px-5 border border-slate-600">Salary Min</th>
                                    <th className="py-3 px-5 border border-slate-600">Salary Max</th>
                                    <th className="py-3 px-5 border border-slate-600">Action</th>
                                </tr>
                            </thead>
                            {
                                job?.map((data, index) => {
                                    const salaryMin = data.salary_min.toString().split('').reverse().join('');
                                    const ribuanMin = salaryMin.match(/\d{1,3}/g);
                                    const hasilMin = ribuanMin.join('.').split('').reverse().join('');

                                    const salaryMax = data.salary_min.toString().split('').reverse().join('');
                                    const ribuanMax = salaryMax.match(/\d{1,3}/g);
                                    const hasilMax = ribuanMax.join('.').split('').reverse().join('');
                                    return (
                                        <tbody key={index} className="text-left text-abu">
                                            <tr>
                                                <td className="py-3 px-2 border border-slate-700">{data.title}</td>
                                                <td className="py-3 px-2 border border-slate-700">{data.company_name}</td>
                                                <td className="py-3 px-2 border border-slate-700">{data.job_type}</td>
                                                <td className="py-3 px-2 border border-slate-700">{data.job_tenure}</td>
                                                <td className="py-3 px-2 border border-slate-700">{hasilMin}</td>
                                                <td className="py-3 px-2 border border-slate-700">{hasilMax}</td>
                                                <td className="py-3 px-2 border border-slate-700">
                                                    <button onClick={handleDetail} value={data.id} className="font-bold mx-1 cursor-pointer text-orange hover:text-abu">Detail</button>
                                                    <button onClick={handleEdit} value={data.id} className="font-bold mx-1 cursor-pointer  text-orange hover:text-abu">Edit</button>
                                                    <button onClick={handleDelete} value={data.id} className="font-bold mx-1 cursor-pointer  text-orange hover:text-abu">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
                <Footer/>
            </Sidebar>
        </>
    )
}

export default ListJobTable;

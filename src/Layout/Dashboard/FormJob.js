import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Sidebar from './Sidebar';

const FormJob = () => {

    const { id } = useParams()
    const [token, setToken] = useState()
    const [input, setInput] = useState({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: "",
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: "",
        salary_max: "",
    })

    useEffect(() => {
        setToken(Cookies.get('token'))
    })

    useEffect(() => {
        if (id) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
                .then((res) => {
                    const data = res.data
                    setInput({
                        title: data.title,
                        job_description: data.job_description,
                        job_qualification: data.job_qualification,
                        job_type: data.job_type,
                        job_tenure: data.job_tenure,
                        job_status: data.job_status,
                        company_name: data.company_name,
                        company_image_url: data.company_image_url,
                        company_city: data.company_city,
                        salary_min: data.salary_min,
                        salary_max: data.salary_max,
                    })
                }).catch((err) => {
                    console.log(err)
                })
        }
    }, [])

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setInput({ ...input, [name]: value })
        // console.log(input)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max } = input

        if (id) {
            await axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
                title: title,
                job_description: job_description,
                job_qualification: job_qualification,
                job_type: job_type,
                job_tenure: job_tenure,
                job_status: job_status,
                company_name: company_name,
                company_image_url: company_image_url,
                company_city: company_city,
                salary_min: salary_min,
                salary_max: salary_max
            }, {
                headers: {
                    "Authorization": 'Bearer' + token
                }
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            await axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`, {
                title: title,
                job_description: job_description,
                job_qualification: job_qualification,
                job_type: job_type,
                job_tenure: job_tenure,
                job_status: job_status,
                company_name: company_name,
                company_image_url: company_image_url,
                company_city: company_city,
                salary_min: salary_min,
                salary_max: salary_max
            }, {
                headers: {
                    "Authorization": 'Bearer' + token
                }
            })
                .then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
        }

        //agar form mrnjadi kosong setelah submit
        setInput({
            title: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: "",
            company_name: "",
            company_image_url: "",
            company_city: "",
            salary_min: "",
            salary_max: "",
        })
    }

    return (
        <>
            <Sidebar>
                <div className='mt-10'>
                    <h1 className='text-center text-3xl font-bold'>Form Job</h1>
                    <p className='mt-4 underline text-center'>Add or Edit Job </p>
                    <form onSubmit={handleSubmit} className='mt-10'>
                        <div className='mt-5 mx-10 grid grid-cols-4'>
                            <label className='font-bold text-xl'>Job Title</label>
                            <input onChange={handleChange} type="text" name="title" value={input.title} className='col-span-3 text-abu px-3 py-2 border-2 border-gray-300 rounded-xl focus:outline-none  focus:border-2 focus:border-orange'></input><br />
                        </div>
                        <div className='mt-2 mx-10 grid grid-cols-4'>
                            <label className='font-bold text-xl'>Description</label>
                            <input onChange={handleChange} type="text" name="job_description" value={input.job_description} className='col-span-3 text-abu px-3 py-2 border-2 border-gray-300 rounded-xl focus:outline-none  focus:border-2 focus:border-orange'></input><br />
                        </div>
                        <div className='mt-2 mx-10 grid grid-cols-4'>
                            <label className='font-bold text-xl'>Qualification</label>
                            <input onChange={handleChange} type="text" name="job_qualification" value={input.job_qualification} className='col-span-3 text-abu px-3 py-2 border-2 border-gray-300 rounded-xl focus:outline-none  focus:border-2 focus:border-orange'></input><br />
                        </div>
                        <div className='mt-2 mx-10 grid grid-cols-4'>
                            <label className='font-bold text-xl'>Job Type</label>
                            <input onChange={handleChange} type="text" name="job_type" value={input.job_type} className='col-span-3 text-abu px-3 py-2 border-2 border-gray-300 rounded-xl focus:outline-none  focus:border-2 focus:border-orange'></input><br />
                        </div>
                        <div className='mt-2 mx-10 grid grid-cols-4'>
                            <label className='font-bold text-xl'>Job Tenure</label>
                            <input onChange={handleChange} type="text" name="job_tenure" value={input.job_tenure} className='col-span-3 text-abu px-3 py-2 border-2 border-gray-300 rounded-xl focus:outline-none  focus:border-2 focus:border-orange'></input><br />
                        </div>
                        <div className='mt-2 mx-10 grid grid-cols-4'>
                            <label className='font-bold text-xl'>Job Status</label>
                            <input onChange={handleChange} type="text" name="job_status" value={input.job_status} className='col-span-3 text-abu px-3 py-2 border-2 border-gray-300 rounded-xl focus:outline-none  focus:border-2 focus:border-orange'></input><br />
                        </div>
                        <div className='mt-2 mx-10 grid grid-cols-4'>
                            <label className='font-bold text-xl'>Company Name</label>
                            <input onChange={handleChange} type="text" name="company_name" value={input.company_name} className='col-span-3 text-abu px-3 py-2 border-2 border-gray-300 rounded-xl focus:outline-none  focus:border-2 focus:border-orange'></input><br />
                        </div>
                        <div className='mt-2 mx-10 grid grid-cols-4'>
                            <label className='font-bold text-xl'>Image</label>
                            <input onChange={handleChange} type="text" name="company_image_url" value={input.company_image_url} className='col-span-3 text-abu px-3 py-2 border-2 border-gray-300 rounded-xl focus:outline-none  focus:border-2 focus:border-orange'></input><br />
                        </div>
                        <div className='mt-2 mx-10 grid grid-cols-4'>
                            <label className='font-bold text-xl'>City</label>
                            <input onChange={handleChange} type="text" name="company_city" value={input.company_city} className='col-span-3 text-abu px-3 py-2 border-2 border-gray-300 rounded-xl focus:outline-none  focus:border-2 focus:border-orange'></input><br />
                        </div>
                        <div className='mt-2 mx-10 grid grid-cols-4'>
                            <label className='font-bold text-xl'>Salary Min</label>
                            <input onChange={handleChange} type="text" name="salary_min" value={input.salary_min} className='col-span-3 text-abu px-3 py-2 border-2 border-gray-300 rounded-xl focus:outline-none  focus:border-2 focus:border-orange'></input><br />
                        </div>
                        <div className='mt-2 mx-10 grid grid-cols-4'>
                            <label className='font-bold text-xl'>Salary Max</label>
                            <input onChange={handleChange} type="text" name="salary_max" value={input.salary_max} className='col-span-3 text-abu px-3 py-2 border-2 border-gray-300 rounded-xl focus:outline-none  focus:border-2 focus:border-orange'></input><br />
                        </div>
                        <div className='flex justify-center'>
                            <Link to="/list-Job-Table">
                                <button className="w-28 text-white rounded-2xl p-2 bg-orange hover:bg-opacity-80 hover:text-slate-700 text-center">Submit</button>
                            </Link>
                        </div>
                    </form>
                </div>
                <Footer />
            </Sidebar>
        </>
    )
}

export default FormJob;

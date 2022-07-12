import React from "react";

const ListJobTable = () => {

    const job = [
        {title : "Front-End Web",name : "PT.Informatika", city : "Bandung" , salary : "50.000"},
        {title : "Front-End Web",name : "PT.Informatika", city : "Bandung" , salary : "50.000"},
        {title : "Front-End Web",name : "PT.Informatika", city : "Bandung" , salary : "50.000"},
        {title : "Front-End Web",name : "PT.Informatika", city : "Bandung" , salary : "50.000"},
    ]

    return(
        <table className="font-Mulish mt-14 ml-9">
            <thead className="bg-gray-50">
                <tr>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        NO
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Job Title
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Company Name
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Company City
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Salary
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                    {job.map((value, index) => {
                        return(
                        <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{index}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{value.title}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{value.name}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{value.city}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{value.salary}</td>
                            <td className="flex text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap "><p className="mx-1">Edit</p> <p className="mx-1">Detail</p></td>
                        </tr>
                    )}
                    )}
            </tbody>
        </table>
    )
}

export default ListJobTable;

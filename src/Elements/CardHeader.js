import React from "react";
import ButtonCari from "./ButtonCari";

const CardHeader =() =>{
    return(
        <div className="bg-white w-c h-d p-6 rounded-md flex justify-between shadow-lg ">
            <p className="text-abu items-center mt-6">Temukan Pekerjaanmu </p>
            <ButtonCari/>
        </div>
    )
}

export default CardHeader;
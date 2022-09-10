import React from "react";
import Img from "../Assets/Images/Dot Ornament.png"
import Img1 from "../Assets/Images/people1.png"
import Img2 from "../Assets/Images/people2.png"
import Img3 from "../Assets/Images/people3.png"

const Ulasan = (props) => {
    return(
        <div className="flex flex-row mt-10 font-Mulish" id="ulasan">
            <div className="basis-1/2 h-full bg-orangeless py-40">
                <h1 className="font-bold text-3xl pr-40 px-5">Apa Kata Mereka Tentang Find Job</h1>
                <div className="absolute left-40">
                    <img src={Img}></img>
                </div>
            </div>
            <div className="basis-1/2 pl-10 py-16">
                <div className="flex flex-row">
                    <div className="basis-1/6">
                        <img src={Img1} className="h-9 rounded-full"></img>
                    </div>
                    <div className="basis-5/6">
                        <h1 className="font-bold">Siska</h1>
                        <p className="text-abu text-sm">Sangat membantu ketika saya mencari pekerjaan yang saya inginkan</p>
                    </div>
                </div>
                <div className="flex flex-row mt-9">
                    <div className="basis-1/6">
                        <img src={Img2} className="h-9 rounded-full"></img>
                    </div>
                    <div className="basis-5/6">
                        <h1 className="font-bold">William</h1>
                        <p className="text-abu text-sm">Banyak pilihan pekerjaan yang sesuai dengan pashion saya</p>
                    </div>
                </div>
                <div className="flex flex-row mt-9">
                    <div className="basis-1/6">
                        <img src={Img3} className="h-9 rounded-full"></img>
                    </div>
                    <div className="basis-5/6">
                        <h1 className="font-bold">Jessica</h1>
                        <p className="text-abu text-sm">Sangat Rekomendasi bagi kalian yang lagi nyari Kerja</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ulasan;
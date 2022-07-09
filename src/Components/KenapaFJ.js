import React from "react";
import Bg from "../Assets/Images/Box Background.png"

const KenapaFJ = () => {
    return(
        <div className="flex flex-row mt-10 font-Mulish">
            <div className="basis-1/2 pr-28 py-32">
                <h1 className="text-3xl font-bold">Kenapa Find Job ?</h1>
                <p className="mt-5 text-abu">Kami Telah berpengalaman dalam melayani raturan ribu orang mendapatkan pekerjaan mereka</p>
                <h1 className="mt-9 text-5xl font-extrabold text-green">600++</h1>
                <p className="mt-3 text-abu">Lowongan pekerjaan</p>
            </div>
            <div className="basis-1/2 h-full bg-biru py-32">
                <div className="flex flex-row">
                    <div className="basis-1/6">
                        <div className="mx-auto w-6 bg-greenless rounded-full">.</div>
                    </div>
                    <div className="basis-5/6">
                        <div className="font-bold text-xl">Waktu Pencarian yang Cepat</div>
                        <p className="text-sm text-abu mt-3">Dengan aplikasi yang ringan menjadikan pencarian lowongan pekerjaan menjadi lebih cepat</p>
                    </div>
                </div>
                <div className="flex flex-row mt-9">
                    <div className="basis-1/6">
                        <div className="mx-auto w-6 bg-greenless rounded-full">.</div>
                    </div>
                    <div className="basis-5/6">
                        <div className="font-bold text-xl">Lowongan Pekerjaan Sesuai</div>
                        <p className="text-sm text-abu mt-3">Bekerja sama dengan berbagai perushaan membuat banyak lowongan yang tersaji dalam aplikasi ini</p>
                    </div>
                </div>
                <div className="flex flex-row mt-9">
                    <div className="basis-1/6">
                        <div className="mx-auto w-6 bg-greenless rounded-full">.</div>
                    </div>
                    <div className="basis-5/6">
                        <div className="font-bold text-xl">Jenis Pekerjaan Beragam</div>
                        <p className="text-sm text-abu mt-3">Semua informasi mengenai jenis pekerjaan tersaji dan terfilter dengan baik</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default KenapaFJ;
"use client"
import { useState } from "react"

const OurMission = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className={`${isOpen ? "fixed" : "hidden"} z-1 left-2.5 md:left-6`}>
            <div className="flex flex-col items-center animate-shake">
                <span className="h-30 w-1 inline-block bg-amber-500"></span>
                <div className=" w-100 h-fit p-5 bg-white rounded-xl text-center shadow-lg shadow-black/50 flex flex-col justify-between items-center gap-7">
                    <h2 className="capitalize font-heading text-4xl font-bold text-purple-800">our mission</h2>
                    <p className="leading-8">Zikoko amplifies African youth culture by curating and creating smart and joyful content for young Africans and the world.</p>
                    <button className="w-fit rounded-xl py-2 px-5 bg-red-600 text-white font-bold hover:bg-red-400 hover:cursor-pointer" onClick={()=>setIsOpen(false)}>Dismiss</button>
                </div>
            </div>
        </div>
    )
}

export default OurMission

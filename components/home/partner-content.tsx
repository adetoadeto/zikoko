import Image from "next/image"
import announcerImg from "@/public/partner.png"

const PartnerContent = () => {
    return (
        <div className="h-fit rounded-xl bg-purple-800 flex justify-between items-center">
            <div className="w-1/2 flex flex-col gap-5 text-white p-5">
                <p className="uppercase text-xs text-gray-300">partner content: announcements</p>
                <p className="font-heading text-3xl/normal font-semibold">Opportunities, products and services from brands we love.</p>
                <div className="flex gap-4 items-center">
                    <button className="bg-white text-purple-800 font-semibold rounded-md px-3 py-2 flex gap-2 items-center w-fit"><span>See what's new</span><i className="fa-solid fa-arrow-up rotate-45"></i></button>
                    <button className="bg-purple-700 text-white font-semibold rounded-md py-2 px-3 flex gap-2 items-center w-fit"><span>Partner with us</span><i className="fa-solid fa-handshake"></i></button>
                </div>

            </div>
            <div className="flex items-center">
                <Image src={announcerImg} alt="vector image of a male with a megaphone" height={350} width={350} className=" " />
            </div>
        </div>
    )
}

export default PartnerContent

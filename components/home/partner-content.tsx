import Image from "next/image"
import Link from "next/link"
import announcerImg from "@/public/partner.png"

const PartnerContent = () => {
    return (
        <div className="h-fit rounded-xl bg-purple-800 flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="md:w-1/2 flex flex-col gap-5 text-white p-5">
                <p className="uppercase text-xs text-gray-300">partner content: announcements</p>
                <p className="font-heading text-3xl/normal font-semibold">Opportunities, products and services from brands we love.</p>
                <div className="flex gap-4 items-center">
                    <Link href="/partners-announcements" className="w-full md:w-fit flex justify-between gap-2 items-center bg-white text-purple-800 font-semibold rounded-md px-3 py-2"><span>See what's new</span><i className="fa-solid fa-arrow-up rotate-45"></i></Link>
                    <Link href="/" className="w-full md:w-fit flex justify-between gap-2 items-center bg-purple-950 text-white font-semibold rounded-md py-2 px-3"><span>Partner with us</span><i className="fa-solid fa-handshake"></i></Link>
                </div>
            </div>
            <div>
                <Image src={announcerImg} alt="vector image of a male with a megaphone" height={350} width={350} className="animate-shake" />
            </div>
        </div>
    )
}

export default PartnerContent

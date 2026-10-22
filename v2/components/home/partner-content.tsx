import Image from "next/image"
import Link from "next/link"
import announcerImg from "@/public/advertise/partner.png"
import Button from "../ui/button"

const PartnerContent = () => {
    return (
        <div className="h-fit rounded-xl bg-purple-800 flex flex-row justify-between items-center">
            <div className="md:w-1/2 flex flex-col gap-5 text-white p-3 sm:p-5">
                <p className="uppercase text-[10px] md:text-xs text-gray-300">partner content: announcements</p>
                <p className="font-heading text-2xl md:text-3xl leading-normal font-semibold">Opportunities, products and services from brands we love.</p>
                <div className="flex max-[400px]:flex-wrap gap-3 items-center">
                    <Button href="/partners-announcements" text="See what's new" icon="arrow-up rotate-45" inverse={true} extraStyles={"flex-row-reverse max-[400px]:w-full border-0"} />
                    <Button href="/partnership" text="Partner with us" icon="handshake" extraStyles={"bg-purple-950 max-[400px]:w-full"} />
                </div>
            </div>
            <div className="hidden sm:block">
                <Image src={announcerImg} alt="vector image of a male with a megaphone" height={350} width={350} className="animate-shake" />
            </div>
        </div>
    )
}

export default PartnerContent

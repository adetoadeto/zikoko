import Image from "next/image"
import { MarqueeProps } from "@/lib/interface"
import partnersLogo from "@/lib/partners"
import SubHeadingWrapper from "./sub-heading-wrapper"

const TrustedBrands = () => {
    return (
        <div>
            <SubHeadingWrapper heading="trusted by brands we love" />
            <div className="flex overflow-auto no-scrollbar ">
                <Marquee data={partnersLogo} />
            </div>
        </div>
    )
}

export default TrustedBrands

export const Marquee = ({ data }: MarqueeProps) => {

    return (
        [1, 2].map(item =>
            <div key={item} className={`flex justify-between items-center gap-8 animate-marquee ${item === 1 ? "aria-hidden:" : ""}`} >
                {data.map(item =>
                    <div key={item.src} className="flex-[0_0_5em]">
                        <Image src={item.src} alt="brands logo" height={80} width={80} className="object-cover" />
                    </div>
                )}
            </div>
        )
    )
}

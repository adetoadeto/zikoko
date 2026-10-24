import PartnershipBanner from "@/components/partnership/banner"
import GetStarted from "@/components/partnership/get-started"
import OurServices from "@/components/partnership/our-services"
import TrustedBrands from "@/components/partnership/trusted-brands"
import WhyUs from "@/components/partnership/why-us"

const Partnership = () => {
    return (
        <section className="min-h-screen pt-spacing-t flex flex-col gap-13">
            <PartnershipBanner />
            <div className="flex flex-col gap-13 px-spacing-x">
                <TrustedBrands />
                <WhyUs />
                <OurServices />
                <GetStarted />
            </div>
        </section>

    )
}

export default Partnership

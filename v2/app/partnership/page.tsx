import Main from "@/components/partnership/main"
import OurServices from "@/components/partnership/our-services"
import TrustedBrands from "@/components/partnership/trusted-brands"
import WhyUs from "@/components/partnership/why-us"
import GetStarted from "@/components/partnership/get-started"

const Partnership = () => {
    return (
        <section className="min-h-screen pt-spacing-t-mobile lg:pt-spacing-t flex flex-col gap-13">
            <Main />
            <div className="flex flex-col gap-13 px-spacing-x-mobile lg:px-spacing-x">
                <TrustedBrands />
                <WhyUs />
                <OurServices />
                <GetStarted />
            </div>
        </section>
    )
}

export default Partnership

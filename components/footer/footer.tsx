import Image from "next/image"
import { footerLinks } from "../../lib/footer"
import { socials } from "../../lib/socials"
import FooterLinks from "./footer-links"
import NewsLetterBox from "../newsletter/newsletter-box"
import brandLogo from "@/public/logo/logo_white.png"

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="mt-8 px-spacing-x py-8 bg-purple-950 text-white">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10 items-start" >
                <div className="flex flex-col gap-5">
                    <Image src={brandLogo} alt="zikoko logo" height={200} width={200} />
                    <p>Zikoko is a big cabal media brand</p>
                    <div className="flex items-center gap-4">
                        {socials.map(item =>
                            <a href={item.href} target="_blank" className="h-8 w-8 rounded-full p-3 bg-white text-purple-950 flex items-center justify-center"><i className={`fa-brands fa-${item.icon}`}></i></a>
                        )}
                    </div>
                </div>
                <div className="flex justify-between gap-10">{footerLinks.map(item => <FooterLinks item={item} />)}</div>
                <div className=""><NewsLetterBox /></div>
            </div>
            <p className="mt-10 text-gray-300"> &copy; 2018 - {year} Zikoko. All rights reserved. </p>
        </footer>
    )
}

export default Footer

import Image from "next/image"
import { footerLinks } from "../../lib/footer"
import { socials } from "../../lib/socials"
import FooterLinks from "./footer-links"
import Subscribe from "../newsletter/subscribe"
import brandLogo from "@/public/logo/logo_white.png"

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="px-spacing-x py-8 bg-purple-950 mt-8 text-white flex justify-between">
            <div className="flex flex-col justify-between w-1/3">
                <div className="flex flex-col gap-5">
                    <Image src={brandLogo} alt="zikoko logo" height={200} width={200} />
                    <p>Zikoko is a big cabal media brand</p>
                    <div className="flex items-center gap-4">
                        {socials.map(item =>
                            <a href={item.href} target="_blank" className="h-8 w-8 rounded-full p-3 bg-white text-purple-950 flex items-center justify-center"><i className={`fa-brands fa-${item.icon}`}></i></a>
                        )}
                    </div>
                </div>
                <p> &copy; 2018 - {year} Zikoko. All rights reserved. </p>
            </div>
            <div className="flex gap-35 w-1/3">{footerLinks.map(item => <FooterLinks item={item} />)}</div>
            <div className="w-1/3"><Subscribe /></div>
        </footer>
    )
}

export default Footer

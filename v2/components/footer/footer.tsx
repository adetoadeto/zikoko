"use client"
import Image from "next/image"
import { useContext } from "react"
import FooterLinks from "./footer-links"
import NewsLetterBox from "../newsletter/newsletter-box"
import { socials } from "@/lib/socials"
import { Context } from "@/store/context"
import brandLogo from "@/public/logo/logo_white.png"

const Footer = () => {
    const year = new Date().getFullYear()
    const {categories} = useContext(Context)
 
    return (
        <footer className="w-full mt-8 px-spacing-x-mobile xl:px-spacing-x py-8 bg-purple-950 text-white">
            <div className="flex flex-col sm:grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10" >
                <div className="flex flex-col gap-5">
                    <Image src={brandLogo} alt="zikoko logo" height={200} width={200} />
                    <p>Zikoko is a big cabal media brand</p>
                    <div className="flex flex-wrap items-center gap-4">
                        {socials.map(item =>
                            <a href={item.href} target="_blank" className="h-8 w-8 rounded-full p-3 bg-white text-purple-950 flex items-center justify-center"><i className={`fa-brands fa-${item.icon}`}></i></a>
                        )}
                    </div>
                </div>

                <FooterLinks categories={categories.slice(0, 5)} heading="Explore" />
                <FooterLinks categories={categories.slice(5)} heading="More" />
                
                <NewsLetterBox />
            </div>
            <p className="mt-10 text-gray-300"> &copy; 2018 - {year} Zikoko. All rights reserved. </p>
        </footer>
    )
}

export default Footer

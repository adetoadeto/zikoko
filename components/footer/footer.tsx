import footerLogo from "@/public/logo/logo_white.png"
import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "../lib/footer"
import { socials } from "../lib/socials"

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="px-spacing-x py-8 bg-purple-950 mt-8 text-white flex justify-between">
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-5">
                    <Image src={footerLogo} alt="zikoko logo" height={200} width={200} />
                    <p>Zikoko is a big cabal media brand</p>
                    <div className="flex items-center gap-4">
                        {socials.map(item => 
                              <a href={item.href} target="_blank" className="h-8 w-8 rounded-full p-3 bg-white text-purple-950 flex items-center justify-center"><i className={`fa-brands fa-${item.icon}`}></i></a>
                        )}
                      
                    </div>
                </div>
                <p> &copy; 2018 - {year} Zikoko. All rights reserved. </p>
            </div>
            {footerLinks.map(item =>
                <div>
                    <strong className="text-lg capitalize">{item.heading}</strong>
                    <ul className="text-gray-300 flex flex-col gap-1.5 mt-4 capitalize">
                        {item.lists.map(item => <li><Link href="/">{item}</Link></li>)}
                    </ul>
                </div>
            )}
            <div>
                <strong className="text-lg">Join Our Community</strong>
                <p className="w-2/3 leading-7 text-gray-300 my-4">Be the first to get the best stories, quizzes and updates.</p>
                <div className="w-fit border border-gray-600 rounded-md">
                    <input type="text" placeholder="Enter your email" className="p-2.5 rounded-tl-md rounded-bl-md placeholder:text-gray-300" />
                    <button className="bg-purple-700 py-2.5 px-3 text-white rounded-md hover:cursor-pointer hover:bg-white hover:text-purple-700"><i className="fa-solid fa-arrow-right"></i></button>
                </div>

            </div>
        </footer>
    )
}

export default Footer

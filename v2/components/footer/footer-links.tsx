import Link from "next/link"
import { FooterLinksProps } from "../../lib/interface"

const FooterLinks = ({ categories, heading }: FooterLinksProps) => {
   
    return (
        <div>
            <strong className="text-lg capitalize font-heading">{heading}</strong>
            <ul className="text-gray-300 flex flex-col gap-1.5 mt-4 capitalize">
                {categories?.map(item => <li key={item._id}><Link href={`/${item.link}`}>{item.name}</Link></li>)}
            </ul>
        </div>
    )
}

export default FooterLinks

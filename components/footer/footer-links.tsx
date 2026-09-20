import Link from "next/link"
import { FooterLinksProps } from "../../lib/interface"

const FooterLinks = ({ item }: FooterLinksProps) => {
    return (
        <div>
            <strong className="text-lg capitalize font-heading">{item.heading}</strong>
            <ul className="text-gray-300 flex flex-col gap-1.5 mt-4 capitalize">
                {item.lists.map((item, index) => <li><Link href={`/${item?.href}`}>{item?.name}</Link></li>)}
            </ul>
        </div>
    )
}

export default FooterLinks

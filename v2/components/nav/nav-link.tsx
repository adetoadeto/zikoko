import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavLinkProps } from "../../lib/interface"

const NavLink = ({ href, name }: NavLinkProps) => {
   const activePath = usePathname()

   const isActive = href === "/" ? activePath === "/" : activePath.startsWith(`/${href}`)
   const isActiveClass = "relative before:content-[''] before:absolute before:h-0.75 before:w-full before:bg-purple-600 before:top-[105%] before:rounded-lg before:animate-navlinks text-purple-600"

   return (
      <li className={`capitalize hover:text-purple-600 hover:cursor-pointer ${isActive ? isActiveClass : "undefined"}`}><Link href={`/${href}`}>{name}</Link></li>
   )
}

export default NavLink

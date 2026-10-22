import Link from "next/link"
import { ButtonProps } from "@/lib/interface-types"

const Button = ({ text, href, icon, inverse, extraStyles }: ButtonProps) => {
    const inverseColor = 'border border-neutral-800 text-neutral-800 bg-white'
    return (
        <Link href={href} className={`w-fit rounded-md px-3 py-2 font-bold capitalize flex justify-center items-center gap-2 ${inverse ? inverseColor : ' text-white bg-purple-700'} ${extraStyles}`}><i className={`fa-solid fa-${icon}`}></i>{text}</Link>
    )
}

export default Button

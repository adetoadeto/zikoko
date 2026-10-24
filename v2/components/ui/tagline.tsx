import { TaglineProps } from "../../lib/interface"

const Tagline = ({ text, icon, inverse, extraStyles }: TaglineProps) => {
    const inverseColor = inverse && "text-purple-600 bg-white"
    return (
        <div className={`w-fit flex items-center gap-2 py-1 px-2 md:px-2.5 rounded-lg text-xs font-semibold shadow ${inverse ? inverseColor : "bg-purple-700"} ${extraStyles}`}>
            {icon && <i className="fa-solid fa-star text-amber-400 animate-pulse"></i>}
            <span className="uppercase font-semibold">{text}</span></div>
    )
}

export default Tagline

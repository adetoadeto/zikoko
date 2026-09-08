import Heading from "../heading"
import { categories } from "../lib/home"
import { colors } from "../lib/colors"

const Categories = () => {
    return (
        <div>
            <Heading title="Explore Categories" icon="compass" />
            <div className="mt-5 flex gap-4">
                {categories.map(item =>
                    <div className={`min-w-[250px] p-4 rounded-2xl border  ${colors[item.color].border} ${colors[item.color].bgTransparent} flex flex-col gap-4`}>
                        <div className={`mb-2 p-0.5 rounded-xl flex justify-center items-center h-12 w-12 ${colors[item.color].bg}`}><i className={`fa-solid ${item.icon} text-2xl text-white`}></i></div>
                        <p className="font-heading font-semibold text-lg">{item.name}</p>
                        <p className="leading-7">{item.description}</p>
                        <div className="mt-2 flex justify-between items-center text-sm"><p className={`${colors[item.color].text} font-semibold tracking-wider`}>{item.count}</p><i className="fa-solid fa-arrow-right"></i></div>
                    </div>)}
            </div>
        </div>

    )
}

export default Categories

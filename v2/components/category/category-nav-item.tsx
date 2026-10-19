import { CategoryNavItemProps } from "@/lib/interface-types"

const CategoryNavItem = ({ text, icon, isActive, onClickHandler}: CategoryNavItemProps) => {
    const isActiveClass = "bg-purple-900 rounded-xl text-white"

    return (
        <li className={`min-w-fit font-semibold flex flex-col items-center gap-2 py-2 px-4 hover:cursor-pointer hover:bg-purple-900 hover:rounded-xl hover:text-white ${isActive ? isActiveClass : null}`} onClick={onClickHandler}>
            <i className={`fa-solid fa-${icon}`}></i>
            <span>{text}</span>
        </li>
    )
}

export default CategoryNavItem

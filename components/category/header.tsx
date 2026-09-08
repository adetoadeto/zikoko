
const Header = () => {
    return (
        <ul className="w-[90%] absolute top-117 left-[50%] translate-x-[-50%] flex justify-center gap-15 bg-white p-5 rounded-lg shadow-lg shadow-purple-100">
            <li className="flex flex-col items-center gap-2"><i className="fa-solid fa-plane text-purple-900"></i><span>100 ways to japa</span></li>
            <li className="flex flex-col items-center gap-2"><i className="fa-solid fa-briefcase text-purple-900"></i><span>100 ways to japa</span></li>
            <li className="flex flex-col items-center gap-2"><i className="fa-solid fa-book text-purple-900"></i><span>100 ways to japa</span></li>
            <li className="flex flex-col items-center gap-2"><i className="fa-solid fa-glasses text-purple-900"></i><span>100 ways to japa</span></li>
            <li className="flex flex-col items-center gap-2"><i className="fa-solid fa-car text-purple-900"></i><span>100 ways to japa</span></li>
        </ul>
    )
}

export default Header

const Card = () => {
    return (
        <div className="border border-neutral-200 rounded-xl p-4 shadow-md">
            <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-users text-red-600"></i>
            </div>
            <strong className="font-heading pt-5 py-3 inline-block">Highly Engaged</strong>
            <p className="leading-7">Our audience reads, reacts and shares. Your content gets the attention it deserves.</p>
        </div>
    )
}

export default Card

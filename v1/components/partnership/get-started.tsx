
const GetStarted = () => {
    return (
        <div className="h-60 w-full rounded-xl p-3 bg-purple-950 text-white flex flex-col justify-center items-center gap-8 bg-[url('/advertise_banner.png')] bg-cover bg-blend-multiply text-center">
            <strong className="text-5xl font-heading">Ready to get started?</strong>
            <p className="text-neutral-300">Tell us about your brand and let's bring your ideas to life.</p>
            <button className="capitalize rounded-full py-1.5 px-3 bg-white flex gap-2 items-center text-neutral-800 font-semibold font-heading"><span>Get in touch</span> <i className="fa-solid fa-arrow-right"></i></button>
        </div>
    )
}

export default GetStarted

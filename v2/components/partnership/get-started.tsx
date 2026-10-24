import Button from "../ui/button"

const GetStarted = () => {
    return (
        <div className="h-fit w-full rounded-xl p-10 bg-purple-950 text-white flex flex-col justify-center items-center gap-8 bg-[url('/advertise/advertise_banner.png')] bg-cover bg-blend-multiply text-center">
            <strong className="text-3xl/13 sm:text-4xl font-heading uppercase">Ready to get started?</strong>
            <p className="text-neutral-300">Tell us about your brand and let's bring your ideas to life.</p>
            <Button href="" text="Get in touch" icon="arrow-right" />
        </div>
    )
}

export default GetStarted

import Tagline from "../ui/tagline"
import Button from "../ui/button"

const Main = () => {
    return (
        <div className="px-spacing-x-mobile lg:px-spacing-x py-10 bg-[url('/advertise/advertise.png')] bg-cover h-fit w-full flex items-center shadow-xl">
            <div className=" flex flex-col gap-7">
                <Tagline text="partner with zikoko" extraStyles={"text-white bg-purple-700"} icon="" />
                <h2 className="text-5xl sm:text-6xl/15 flex flex-col gap-3 font-semibold font-heading mt-3"><span>Your content, </span> <span className="text-purple-800">Our audience</span></h2>
                <p className="min-[500px]:w-2/3 md:w-1/2 leading-7">Promote your stories, products, events and more to our vibrant community. Reach a diverse and influential audience across Nigeria and globally</p>
                <div className="flex items-center gap-3 flex-wrap ">
                    <Button href="" text="Get started" icon="arrow-right-to-bracket" extraStyles={"max-[350px]:w-full"} />
                    <Button href="/partners-announcements" text="View Promotions" icon="eye" inverse={true} extraStyles={"max-[350px]:w-full"} />

                </div>
            </div>
        </div>

    )
}

export default Main

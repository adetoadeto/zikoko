import Image from 'next/image'
import RefreshButton from './refresh-button'
import noInternetImg from "@/public/disconnect.png"

const NoInternetPage = () => {
    return (
        <div className=" sm:flex justify-between items-center">

            <div className="sm:w-1/2 h-70 sm:h-full">
                <Image src={noInternetImg} alt="a female holding a disconnected plug" className="object-cover object-top h-full" />
            </div>

            <div className="sm:w-1/2 px-1 mt-4 sm:mt-0 flex flex-col items-center gap-5 text-center ">
                <strong className="text-4xl/10 sm:text-5xl/14 tracking-wide font-heading text-purple-600 text-center">No Internet Connection!</strong>
                <p className="sm:w-[90%] leading-7.5 text-lg">Ensure you are connected to the internet.</p>
                <RefreshButton />
            </div>

        </div>
    )
}

export default NoInternetPage

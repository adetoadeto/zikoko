import Image from "next/image"
import serverErrorImg from "@/public/500.png"
import RefreshButton from "./refresh-button"

const ServerErrorPage = () => {
    return (
          <div className="overflow-x-hidden flex flex-col items-center h-screen px-3">
            <div className="flex items-center justify-center">
                <strong className="hidden md:block text-[19rem] text-purple-800">5</strong>
                <Image src={serverErrorImg} alt="not-found-img" height={550} width={550} className="bg-contain" />
                <strong className="hidden md:block text-[19rem] text-purple-800">0</strong>
            </div>
            <strong className="text-xl text-center font-semibold mt-10 md:mt-0 tracking-wide mb-5 font-heading">
                <span className="text-purple-600"> Server error! </span>
                <span>not to worry, </span>
                <span className="text-purple-600"> we are on it! </span>
            </strong>
              <RefreshButton/>
        </div>
    )
}

export default ServerErrorPage

"use client"
import Image from "next/image"
import Link from "next/link"
import serverErrorImg from "@/public/500.png"

const GlobalErrorPage = ({error}: {error: Error}) => {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center mt-10">
          <div className="flex items-center justify-center">
            <strong className="text-[19rem] text-purple-800">5</strong>
            <Image src={serverErrorImg} alt="not-found-img" height={600} width={600} className="bg-contain" />
            <strong className="text-[19rem] text-purple-800">0</strong>
          </div>
          <strong className="text-xl">

            <span className="text-purple-600"> Server error! </span>
            not to worry,
            <span className="text-purple-600"> we are on it! </span>
          </strong>
          <Link href="/" className="bg-purple-600 text-white  py-2 px-4 rounded-lg font-semibold mt-7 text-lg flex items-center gap-2"><i className="fa-regular fa-house"></i> <span>Return Home</span></Link>
        </div>
      </body>
    </html>

  )
}

export default GlobalErrorPage

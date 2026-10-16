"use client"
import Image from "next/image"
import Link from "next/link"
import PageWrapper from "@/components/wrappers/page-wrapper"
import serverErrorImg from "@/public/500.png"

const ErrorPage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <strong className="text-[19rem] text-purple-800">5</strong>
          <Image src={serverErrorImg} alt="not-found-img" height={600} width={600} className="" />
          <strong className="text-[19rem] text-purple-800">0</strong>
        </div>
        <strong className="text-xl">

          <span className="text-purple-600"> An unexpected error occurred. </span>
          It's not what it looks like,
          <span className="text-purple-600"> we are on it! </span>
        </strong>
        <Link href="/" className="bg-purple-600 text-white  py-2 px-4 rounded-lg font-semibold mt-7 text-lg flex items-center gap-2"><i className="fa-regular fa-house"></i> <span>Return Home</span></Link>
      </div>

    </PageWrapper>
  )
}

export default ErrorPage

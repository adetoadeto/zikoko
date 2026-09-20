import Image from "next/image"
import PageWrapper from "@/components/wrappers/page-wrapper"
import notFoundImg from "../public/404.png"
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <strong className="text-[19rem] text-purple-800">4</strong>
          <Image src={notFoundImg} alt="not-found-img" height={600} width={600} className="" />
          <strong className="text-[19rem] text-purple-800">4</strong>
        </div>
        <strong className="text-xl">
          it's not what it <span className="text-purple-600"> looks like, </span>
          we can explain,
          <span className="text-purple-600"> page not found</span>
        </strong>
        <Link href="/" className="bg-purple-600 text-white  py-2 px-4 rounded-lg font-semibold mt-7 text-lg flex items-center gap-2"><i className="fa-regular fa-house"></i> <span>Return Home</span></Link>
      </div>

    </PageWrapper>
  )
}

export default NotFoundPage

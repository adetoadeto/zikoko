import Image from "next/image"
import PageWrapper from "@/components/wrappers/page-wrapper"
import image from "@/public/newsletter.png"
import NewsLetterButton from "./newsletter-button"

const NewsLetterPage = () => {
    return (
        <PageWrapper>
            <div className="mt-5 flex justify-between items-center h-100 rounded-2xl box-shadow">

                <div className="w-[60%] flex flex-col gap-7 justify-between p-5">
                    <strong className="capitalize text-3xl font-heading text-purple-900">get more zikoko goodness in your mail</strong>
                    <p>Subscribe to our newsletters and never miss any of the action</p>
                    <ul className="flex flex-wrap justify-between gap-4">
                        <li className="flex items-center gap-2">
                            <input type="checkbox" className="bg-amber-400" />
                            <label htmlFor="">Zikoko Daily</label>
                        </li>
                        <li className="flex items-center gap-2">
                            <input type="checkbox" className="bg-amber-400" />
                            <label htmlFor="">Zikoko Daily</label>
                        </li>
                        <li className="flex items-center gap-2">
                            <input type="checkbox" className="bg-amber-400" />
                            <label htmlFor="">Zikoko Daily</label>
                        </li>
                        <li className="flex items-center gap-2">
                            <input type="checkbox" className="bg-amber-400" />
                            <label htmlFor="">Zikoko Daily</label>
                        </li>

                        <li className="flex items-center gap-2">
                            <input type="checkbox" />
                            <label htmlFor="">Zikoko Daily</label>
                        </li>

                        <li className="flex items-center gap-2">
                            <input type="checkbox" />
                            <label htmlFor="">Zikoko Daily</label>
                        </li>
                    </ul>
                    <form action="" className="flex justify-between gap-3">
                        <input type="text" placeholder="Enter your first name" className="p-2 border border-neutral-400 w-1/2 rounded-lg" />
                        <input type="email" placeholder="Email address" className="p-2 border border-neutral-400 w-1/2 rounded-lg" />
                    </form>
                   <NewsLetterButton>Subscribe</NewsLetterButton>
                </div>
                <div className="h-full w-[40%]">
                    <Image src={image} alt="newsletter image" className="h-full object-contain"></Image>
                </div>
            </div>
        </PageWrapper>
    )
}

export default NewsLetterPage

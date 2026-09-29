import Image from "next/image"
import PageWrapper from "@/components/wrappers/page-wrapper"
import image from "@/public/newsletter.png"
import NewsLetterButton from "./newsletter-button"

const NewsLetterPage = () => {
    return (
        <PageWrapper>
            <div className="md:h-screen">
                <div className="mt-5 flex flex-col-reverse sm:flex-row justify-between items-center rounded-2xl box-shadow">
                    <div className="sm:w-[60%] flex flex-col gap-7 justify-between p-2 sm:p-5">
                        <strong className="capitalize text-3xl/11 font-heading text-purple-900">get more zikoko goodness in your mail</strong>
                        <p>Subscribe to our newsletters and never miss any of the action</p>
                        <ul className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4">
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
                        <form className="sm:flex justify-between gap-3">
                            <input type="text" placeholder="Enter your first name" className="p-2 border border-neutral-400 w-full mb-3 sm:w-1/2 sm:mb-0 rounded-lg focus:outline-purple-950/50" />
                            <input type="email" placeholder="Email address" className="p-2 border border-neutral-400 w-full sm:w-1/2 rounded-lg focus:outline-purple-950/50" />
                        </form>
                        <NewsLetterButton>Subscribe</NewsLetterButton>
                    </div>
                    <div className="h-40 sm:h-100 w-[40%]">
                        <Image src={image} alt="newsletter image" className="h-full object-contain"></Image>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default NewsLetterPage

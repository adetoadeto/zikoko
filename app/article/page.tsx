import Image from "next/image"
import SectionWrapper from "@/components/section-wrapper"

const Article = () => {
    return (
        <SectionWrapper>
            <div className="mt-10 flex justify-between gap-15">
                <div className="w-3/5">
                    <article>
                        <div className="flex flex-col gap-4">
                            <h2 className="capitalize text-4xl/12 font-heading font-bold w-[85%]">7 ways to reclaim your time and protect your peace in a busy world</h2>
                            <p className="w-[80%] text-gray-600">Simple, actionable steps to help you take control of your time, set boundaries and focus on what truly matters.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 contain rounded-full bg-red-900">

                                    </div>
                                    <div className="flex flex-col gap-1 text-sm font-semibold text-gray-500">
                                        <p>By <span className="text-purple-800">Bolu Ayodeji</span></p>
                                        <p>Aug 24, 2025 . 6 min read </p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <a href="" className="h-10 w-10 rounded-full"><i className="fa-solid fa-"></i></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="h-90 w-full rounded-lg bg-purple-800 my-5"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt reiciendis incidunt, consequatur vel fugit, quae atque perferendis, possimus cum similique in earum quibusdam culpa quam dolorum recusandae odit. Porro, dolores.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius, velit numquam, perferendis doloremque magnam officiis nesciunt, temporibus est maiores molestias et quam ad dolores vero? Officiis beatae illo quod ipsa sapiente quasi eveniet tenetur. Voluptates, ipsa consequatur! Quis dolorem quisquam itaque possimus. Sit eius modi, dolor perspiciatis temporibus voluptatibus nostrum accusantium omnis sint. Fugiat fugit voluptas vitae non a quidem dolore illum doloremque veniam repellat, voluptatem voluptatum necessitatibus repudiandae molestiae eligendi error impedit obcaecati nihil aperiam aspernatur ducimus quasi? Voluptatum ipsam tempore nostrum fugiat at? In nisi explicabo voluptates quibusdam, totam distinctio? Eveniet commodi dicta suscipit cum, nam totam.</p>
                        </div>
                    </article>
                </div>

                <div className="bg-red-800 w-2/5"></div>
            </div>
        </SectionWrapper>
    )
}

export default Article

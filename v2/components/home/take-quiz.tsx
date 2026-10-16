import Link from "next/link"
import HorizontalScrollWrapper from "../wrappers/horizontal-scroll-wrapper"
import { getArticlesByCategoryName } from "@/lib/article"
import { textShortener } from "@/lib/utils"

const TakeQuiz = async () => {
    const quizzes:Record<string,any>[] = await getArticlesByCategoryName("quizzes")

    return (
        <HorizontalScrollWrapper heading="Take a Quiz" icon="dice" href="quizzes" >
            {quizzes?.map(item => {
                const shortenedHeadline = textShortener(item.headline, 40)
                return (
                    <div key={item._id} className="card-width bg-cover bg-black/5 bg-blend-difference h-45 rounded-xl p-3.5 flex flex-col justify-between transition-transform animate-duration-transition hover:scale-down hover:cursor-pointer" style={{ backgroundImage: `url(${item.img})`, backgroundBlendMode: "darken" }}>
                        <p className="capitalize text-white font-semibold w-2/3 text-lg/8">{shortenedHeadline} </p>
                        <Link href="/" className="w-fit bg-white rounded-md p-2 font-semibold text-sm flex items-center gap-4"><span>Take Quiz</span> <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                )}
            )}
        </HorizontalScrollWrapper>
    )
}

export default TakeQuiz

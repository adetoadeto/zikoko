import Link from "next/link"
import VerticalScrollWrapper from "../wrappers/vertical-scroll-wrapper"
import { getByCategory } from "@/lib/utils"

const TakeQuiz = () => {
    const quizzes = getByCategory("quizzes")?.slice(0,5)
 
    return (
        <VerticalScrollWrapper heading="Take a Quiz" icon="dice" href="quizzes" >
            {quizzes?.map(item =>
                <div className="card-width bg-cover bg-black/5 bg-blend-difference h-45 rounded-xl p-3.5 flex flex-col justify-between transition-transform animate-duration-transition hover:scale-down hover:cursor-pointer" style={{ backgroundImage: `url(${item.img.src})`, backgroundBlendMode: "darken" }}>
                    <p className="capitalize text-white font-semibold w-2/3 text-lg/8">{item.title} </p>
                    <Link href="/" className="w-fit bg-white rounded-md p-2 font-semibold text-sm flex items-center gap-4"><span>Take Quiz</span> <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            )}
        </VerticalScrollWrapper>
    )
}

export default TakeQuiz

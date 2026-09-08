import Link from "next/link"
import Heading from "../heading"
import { quiz } from "../lib/home"

const TakeQuiz = () => {
    return (
        <div>
            <Heading title="Take a Quiz" icon="dice" text="quizzes" />
            <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                {quiz.map(item =>
                    <div className="bg-cover bg-black/5 bg-blend-difference h-45 rounded-xl p-3.5 flex flex-col justify-between" style={{ backgroundImage: `url(${item.img.src})`, backgroundBlendMode: "darken" }}>
                        <p className="capitalize text-white font-semibold w-2/3 text-lg/8">{item.title} </p>
                        <Link href="/" className="w-fit bg-white rounded-md p-2 font-semibold text-sm flex items-center gap-4"><span>Take Quiz</span> <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                )}

            </div>
        </div>
    )
}

export default TakeQuiz

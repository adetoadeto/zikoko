import Link from "next/link"
import NewsLetterButton from "./newsletter-button"

const NewsLetterBox = () => {
    return (
        <div className="rounded-lg p-5 flex flex-col gap-5 bg-purple-700 leading-7 text-white">
            <strong className="text-xl font-heading">Get stories that inspire you</strong>
            <p>Join thousands of smart readers getting our best stories weekly.</p>
            <NewsLetterButton><Link href="/newsletter">Subscribe</Link></NewsLetterButton>
        </div>
    )
}

export default NewsLetterBox

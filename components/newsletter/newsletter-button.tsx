import { ChildrenProps } from "@/lib/interface"

const NewsLetterButton = ({children}: ChildrenProps) => {
    return (
        <button className="bg-purple-950 rounded-lg p-3 text-white font-bold">{children}</button>
    )
}

export default NewsLetterButton

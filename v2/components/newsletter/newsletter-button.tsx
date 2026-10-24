import { ChildrenProps } from "@/lib/interface"

const NewsLetterButton = ({children}: ChildrenProps) => {
    return (
        <button className="bg-purple-950 rounded-lg p-3 text-white font-bold hover:bg-purple-950/70 hover:cursor-pointer">{children}</button>
    )
}

export default NewsLetterButton

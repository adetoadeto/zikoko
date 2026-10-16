import { colors } from "@/lib/colors"
import { ArticleTagProps, Color } from "@/lib/interface-types"

const ArticleTag = ({ tagColor, tagName }: ArticleTagProps) => {
  return (
    <p className={`w-fit uppercase mb-3 py-0.75 px-2 rounded-lg ${colors[tagColor as Color].bg} text-[11px] text-white font-extrabold`}>{tagName}</p>
  )
}

export default ArticleTag

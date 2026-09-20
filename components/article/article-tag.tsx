import { colors } from "../../lib/colors"
import { ArticleTagProps, Color } from "../../lib/interface"

const ArticleTag = ({ tagColor, tagName }: ArticleTagProps) => {
  return (
    <p className={`w-fit uppercase mb-3 py-1 px-2.5 rounded-lg ${colors[tagColor as Color].bg} text-xs text-white font-bold`}>{tagName}</p>
  )
}

export default ArticleTag

import { colors } from "../lib/colors"

const ArticleTag = ({categoryColor, category}) => {
  return (
   <p className={`w-fit uppercase py-1 px-2.5 rounded-lg ${colors[categoryColor].bg} text-xs text-white font-bold`}>{category}</p>
  )
}

export default ArticleTag

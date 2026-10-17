import { MainArticleHeaderProps } from '@/lib/interface-types'
import ArticleTag from '../article-tag'
import MainArticleInfo from './main-article-info'

const MainArticleHeader = ({article}:MainArticleHeaderProps) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="capitalize text-[2.7rem]/14 font-heading font-bold">{article.headline}</h2>
            <p className="lg:w-[85%] leading-7">{article.deck}</p>
            <MainArticleInfo article={article} />
        </div>
    )
}

export default MainArticleHeader 

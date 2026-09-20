import { MainArticleHeaderProps } from '@/lib/interface'
import ArticleTag from '../article-tag'
import MainArticleInfo from './main-article-info'

const MainArticleHeader = ({title}:MainArticleHeaderProps) => {
    return (
        <div className="flex flex-col gap-4">
            {/* <ArticleTag tagColor="purple" tagName="campus" /> */}
            <h2 className="capitalize text-[2.7rem]/14 font-heading font-bold">{title}</h2>
            <p className="w-[85%] leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe recusandae aspernatur sapiente minima quaerat maiores nam, enim quasi debitis repellat.</p>
            <MainArticleInfo />
        </div>
    )
}

export default MainArticleHeader 

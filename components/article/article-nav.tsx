import Link from 'next/link'
import { ArticleNavProps } from '../../lib/interface'

const ArticleNav = async ({ path, href }: ArticleNavProps) => {

    return (
        <ul className="flex gap-3 items-center text-sm text-neutral-500 overflow-scroll no-scrollbar">
            {path.map(item => {
                return (
                    <li className="flex whitespace-nowrap gap-3 items-center capitalize">
                        <Link href={`/${href}`}>{item}</Link>
                        <i className="fa-solid fa-angle-right text-neutral-500"></i>
                    </li>)
            })}
        </ul>
    )
}

export default ArticleNav

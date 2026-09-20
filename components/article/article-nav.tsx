import Link from 'next/link'
import { generateSlug } from '../../lib/utils'
import { ArticleNavProps } from '../../lib/interface'

const ArticleNav = async ({ path }: ArticleNavProps) => {

    return (
        <ul className="flex gap-3 items-center text-sm text-neutral-500">
            {path.map(item => {
                const href = generateSlug(item)
                return (
                    <li className="flex gap-3 items-center capitalize">
                        <Link href={`${href}`}>{item}</Link>
                        <i className="fa-solid fa-angle-right text-neutral-500"></i>
                    </li>)
            })}
        </ul>
    )
}

export default ArticleNav

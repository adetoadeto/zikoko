import Link from 'next/link'
import { ArticleNavProps, Color } from '@/lib/interface-types'
import { colors } from '@/lib/colors'

const ArticleNav = async ({ category }: ArticleNavProps) => {

    return (
        <Link href={`/${category.link}`} className={`font-semibold text-white text-sm text-center px-3.5 py-0.5 rounded-full uppercase tracking-wide ${colors[category.color as Color].bg}`}>{category.name}</Link>
    )
}

export default ArticleNav

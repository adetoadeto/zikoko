import { StaticImageData } from "next/image"
import { colors } from "./colors"

export type Color = keyof typeof colors

export interface ArticleNavProps {
    path: string[],
    href: string,
}

export interface ArticleCardProps {
    item: Record<string, any>,
    isSubCategory?: Boolean,
    noTag?: Boolean
}

export interface ArticleTagProps {
    tagColor: string,
    tagName: string
}

export interface BannerProps {
    category: string
}

export interface CategoryHeaderProps {
    subCategories: {
        text: string,
        icon: string
    }[],
    selectedSubCategory: string | any,
    onSelectSubCategory: (selection: string, icon:string ) => void
}

export interface CategoryBodyProps {
    slug: string
}

export interface CategoryOverviewProps {
    category: string,
    groupedBySubCategory: GroupBySubCategory[]| undefined
}

export interface ChildrenProps {
    children: React.ReactNode
}

export interface FooterLinksProps {
    item: {
        heading: string,
        lists: Record<string, any>[]
    }
}

export interface GroupBySubCategory {
        heading: string,
        articles: Record<string, string>[]
}

export interface MainArticleHeaderProps {
    title: string
}

export interface MainArticleContentProps {
    img: StaticImageData
}

export interface NavLinkProps {
    key: any,
    href: string,
    name: string,
}

export interface ReadTimeProps {
    time: string
}

export interface ScrollWrapperProps {
    heading: string,
    icon: string,
    href?: string,
    children: React.ReactNode
}

export interface SubCategoryPageProps {
    selectedSubCategory: Record<string,string>,
    groupedBySubCategory: GroupBySubCategory[]| undefined
}

export interface SubHeadingProps {
    title: string | undefined,
    text?: string,
    icon?: string
}

export interface Slug {
    params: Record<string, any>
}


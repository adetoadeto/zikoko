import React from "react"
import { colors } from "./colors"

export type Color = keyof typeof colors

export type AddCategory = (
    item: any,
    imageUrl: string,
    subCategories: Record<string, any>[]
) => Promise<void>

export interface ArticleNavProps {
    category: Record<string, any>
}

export interface ArticleCardProps {
    item: Record<string, any>,
    tag?: boolean,
    headlineLength?: number,
    useSubCategory?: boolean,
    extraStyle?: any
}

export interface ArticleTagProps {
    tagColor: string,
    tagName: string
}

export interface AuthorProps {
    author: Record<string, any>
}

export interface ButtonProps {
    text: string, href: string, icon: string, inverse?: boolean, extraStyles?: string
}
export interface CategoryArticlesType {
    latestArticles?: Record<string, any>[] | null,
    groupedArticles?: Record<string, any>[] | null
}

export interface CategoryProps {
    selectedCategory: string
}

export interface CategoryNavItemProps {
    text: string,
    icon: string,
    isActive: Boolean,
    onClickHandler: React.MouseEventHandler<HTMLLIElement>
}

export interface ChildrenProps {
    children: React.ReactNode
}

export interface ContextType {
    categories: Record<string, any>[],
    selectedCategory: string,
    selectedSubCategory: Record<string, string>,
    archiveSelection: Record<string, any>,
    storeCategories: (categories: Record<string, any>[]) => void,
    storeSelectedCategory: (slug: string) => void,
    storeSelectedSubCategory: (selectionId: string, selectionName: string, selectionIcon: string) => void,
    storeArchiveSelection: (optionType: string, value: string | number) => void,
    clearSelectedSubCategory: () => void,
}

export interface ContextProviderProps {
    children: React.ReactNode,
    initialData: Record<string, any>[]
}

export interface FeaturedCardProps {
    featured: Record<string, any>,
}

export interface FooterLinksProps {
    heading: string,
    categories: Record<string, any>[]
}

export interface MainArticleProps {
    article: Record<string, any>
}

export interface MainArticleHeaderProps {
    article: Record<string, any>
}

export interface MainArticleContentProps {
    img: string
}

export interface MarqueeProps {
    data: Record<string, any>[]
}

export interface NavLinkProps {
    href: string,
    name: string,
}

export interface ReadDurationProps {
    time: string
}

export interface RelatedArticlesProps {
    categoryId: string
}

export interface ScrollWrapperProps {
    heading: string,
    icon: string,
    href?: string,
    children: React.ReactNode
}

export interface SelectDropdownProps {
    heading: string,
    options: number[] | string[],
    onSelectOption: (optionType: string, value: string | number) => void,
    selectedOption: string | number,
    extraStyles: string
}

export interface SubHeadingProps {
    title: string,
    text?: string,
    icon: string
}

export interface Slug {
    params: Record<string, any>
}

export interface PartnershipCardProps {
    icon: string,
    heading: string,
    content: string,
    color: string
}

export interface PartnershipCardContainerProps {
    data: Record<string, any>[],
    heading: string
}

export interface PartnershipSubHeadingProps {
    heading: string
}

export interface TaglineProps {
    text: string, icon: string, inverse?: boolean, extraStyles?: string
}
import slugify from "slugify"

export const getYears = () => {
    let startingYear = 2018
    const currYear = new Date().getFullYear()
    const gap = currYear - startingYear

    let years = []

    for (let i = 0; i <= gap; i++) {
        years.push(startingYear)
        startingYear += 1
    }
    return years
}

export const textShortener = (text: string, length?: number) => {
    if (!text) {
        return
    }

    const permittedLength = length ? length : 100
    const textLength = text.length
    let formattedText;

    if (textLength >= permittedLength) {
        const trimmedTitle = text.slice(0, permittedLength).concat("...")
        formattedText = trimmedTitle
    } else {
        formattedText = text
    }
    return formattedText
}

export const generateDate = (date:string) => {
    return date.split("T")[0]
}

export const generateSlug = (text: string) => {
    if (!text) {
        return
    }
    const slug = slugify(text, {
        lower: true,
        strict: true,
        trim: true,
        replacement: "-"
    })
    return slug
}

export const capitalizeSlug = (slug: string) => {
    const formattedCategorySlug = slug.split("-").reduce((accValue: string, currValue: string) => {
        const firstChar = currValue.charAt(0).toUpperCase()
        const otherChars = currValue.slice(1,)
        const combinedValues = firstChar + otherChars
        return accValue + " " + combinedValues
    }, "")

    return formattedCategorySlug
}

export const groupCategoryArticlesBySubCategory = (articles: Record<string, any>[]) => {

    const result = []

    for (const article of articles) {
        const subcategoryName = article.subCategory.name
        const existingItemIndex = result.findIndex(item => item.subcategory.name === subcategoryName)

        if (existingItemIndex >= 0) {
            const existingItem = result[existingItemIndex]
            result[existingItemIndex].articles = [...existingItem.articles, article]
        } else {
            const newItem = {
                subcategory: { name: article.subCategory.name, icon: article.subCategory.icon },
                articles: [article]
            }
            result.push(newItem)
        }
    }

    return result

}

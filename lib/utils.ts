import { articles } from "./articles";

export const textShortener = (text: string) => {
    if (!text) {
        return
    }

    const permittedLength = 55
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

export const generateSlug = (title: string) => {
    if (!title) {
        return
    }
    const slug = title.split(" ").join("-")
    return slug
}

export const getFeaturedArticles = () => {
    const featuredArticles: Record<string, any>[] = []
    for (const [key, value] of Object.entries(articles)) {
        const categories = value

        for (const [key, value] of Object.entries(categories)) {
            const categoryArticles: Record<string, any>[] = JSON.parse(JSON.stringify(value))

            categoryArticles.map(item => {
                if (item.featured) {
                    featuredArticles.push(item)
                }
            })
        }
    }
    return featuredArticles
}

export const getLatestArticles = () => {
    const latestArticles = []
    for (const [key, value] of Object.entries(articles)) {
        const categories = value

        for (const [key, value] of Object.entries(categories)) {
            const categoryArticles = JSON.parse(JSON.stringify(value[0]))
            latestArticles.push(categoryArticles)
        }
    }
    return latestArticles
}

export const getByCategory = (category: string) => {
    if (!category) {
        return
    }

    if (category === "aluta-and-chill") {
        category = "aluta"
    }
    if (category === "man-dem") {
        category = "mandem"
    }
    if (category === "partners-announcements") {
        category = "partners"
    }

    let data;

    for (const [key, value] of Object.entries(articles)) {
        const categories = value

        for (const [key, value] of Object.entries(categories)) {
            if (category.toLowerCase() === key.toLowerCase()) {
                const categoryArticles: Record<string, any>[] = JSON.parse(JSON.stringify(value))
                data = categoryArticles
                break
            }
        }
    }
    return data
}

export const getBySubCategory = (category: string) => {
    if (!category) {
        return
    }

    const articles = getByCategory(category)

    const data = articles?.reduce<Record<string, string | any>>((acc, currVal) => {
        const existing = acc[currVal.subCategory]

        if (!existing) {
            acc[currVal.subCategory] = [currVal]
        } else {
            acc[currVal.subCategory] = [...existing, currVal]
        }
        return acc
    }, {});

    const newArray = []
    for (const [key, value] of Object.entries(data)) {
        newArray.push({ heading: key, articles: value })
    }
    return newArray
}

export const getArticle = (title: string) => {
    let article;
    for (const [key, value] of Object.entries(articles)) {
        const categories = value

        for (const [key, value] of Object.entries(categories)) {
            const result = value.filter(item => generateSlug(item.title) === title)
            if (result) {
                article = JSON.parse(JSON.stringify(result))
                break
            }

        }
    }
    return article
}


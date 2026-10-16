"use client"
import { createContext, useState } from "react";
import { ContextProviderProps, ContextType } from "@/lib/interface-types";

export const Context = createContext<ContextType>({
    categories: [],
    selectedCategory: "",
    selectedSubCategory: {},
    storeCategories: (categories) => { },
    storeSelectedCategory: (slug) => { },
    storeSelectedSubCategory: (selectionId, selectionName, selectionIcon) => { },
})

const ContextProvider = ({ children, initialData }: ContextProviderProps) => {

    const [categories, setCategories] = useState(initialData)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedSubCategory, setSelectedSubCategory] = useState({
        id: "",
        name: "",
        icon: ""
    })

    const storeCategories = (categories: any) => {
        setCategories(categories)
    }

    const storeSelectedCategory = (slug: string) => {
        setSelectedCategory(slug)
    }

    const storeSelectedSubCategory = (selectionId: string, selectionName: string, selectionIcon: string) => {
        setSelectedSubCategory({ id: selectionId, name: selectionName, icon: selectionIcon })
    }

    const ctxValue = {
        categories,
        selectedCategory,
        selectedSubCategory,
        storeCategories,
        storeSelectedCategory,
        storeSelectedSubCategory,
    }

    return <Context.Provider value={ctxValue}>{children} </Context.Provider>
}

export default ContextProvider
"use client"
import { createContext, useState } from "react";
import { ContextProviderProps, ContextType } from "@/lib/interface";

export const Context = createContext<ContextType>({
    categories: [],
    selectedCategory: "",
    selectedSubCategory: {},
    archiveSelection: {},
    storeCategories: (categories) => { },
    storeSelectedCategory: (slug) => { },
    storeSelectedSubCategory: (selectionId, selectionName, selectionIcon) => { },
    storeArchiveSelection: (optionType, value) => { },
    clearSelectedSubCategory: () => { }
})

const ContextProvider = ({ children, initialData }: ContextProviderProps) => {

    const [categories, setCategories] = useState(initialData)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedSubCategory, setSelectedSubCategory] = useState({
        id: "",
        name: "",
        icon: ""
    })
    const [archiveSelection, setArchiveSelection] = useState({
        category: "",
        year: ""
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

    const clearSelectedSubCategory = () => {
        setSelectedSubCategory({
            id: "",
            name: "",
            icon: "",
        })
    }

    const storeArchiveSelection = (optionType: string, value: string | number) => {
        setArchiveSelection((prevState) => {
            return { ...prevState, [optionType]: value }
        })
    }

    const ctxValue = {
        categories,
        selectedCategory,
        selectedSubCategory,
        archiveSelection,
        storeCategories,
        storeSelectedCategory,
        storeSelectedSubCategory,
        clearSelectedSubCategory,
        storeArchiveSelection
    }

    return <Context.Provider value={ctxValue}>{children} </Context.Provider>
}

export default ContextProvider
"use client"
import { useContext } from "react"
import Link from "next/link"
import { Context } from "@/store/context"

const CategoryBanner = () => {
  const { categories, selectedCategory} = useContext(Context)
  const isPartnerCategory = selectedCategory === "partners-announcements"
  const category = categories.find((item: any) => item.link === selectedCategory)

  return (
    <div className="relative max-[480]:h-fit h-100 w-full bg-black/90 md:bg-transparent bg-blend-darken bg-cover bg-right md:bg-top mb-9" style={{ backgroundImage: `url(${category?.bannerImg})` }}>
      <div className="h-full md:bg-transparent md:w-2/3 px-spacing-x-mobile py-5 md:px-spacing-x flex flex-col gap-7 justify-center items-center md:items-start text-white text-lg text-center md:text-start wrap-break-word">
        <h2 className="text-6xl/18 sm:text-7xl/20 font-heading uppercase">{category?.name}</h2>
        <p className="sm:w-2/3 leading-9">{category?.longDescription}.</p>
        <div className="flex flex-wrap items-center gap-5 font-semibold">
          <button className="w-full min-[360px]:w-fit text-sm md:text-[16px] rounded-xl border border-purple-400 px-4 py-2">Explore Articles</button>
          <button className="w-full min-[360px]:w-fit text-sm md:text-[16px] rounded-xl bg-yellow-300 px-4 py-2 text-black">{isPartnerCategory ? "Partner with us" : <Link href="/archive">Go to Archive</Link>}</button>
        </div>
      </div>
    </div>
  )
}

export default CategoryBanner

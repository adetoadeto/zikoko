import { notFound } from "next/navigation"
import { categories } from "../../lib/categories"
import { BannerProps } from "../../lib/interface"

const CategoryBanner = ({ category }: BannerProps) => {

  const isPartnerCategory = category === "partners-announcements"
  const content = categories.find(item => item.href === category)
  if (!content) {
    return notFound()
  }

  return (
    <div className="relative h-100 w-full bg-black/70 bg-blend-difference bg-cover bg-center md:bg-top mb-9" style={{ backgroundImage: `url(${content?.bannerImg.src})`, backgroundBlendMode: "darken"}}>
      <div className="h-full  md:bg-transparent md:w-2/3 px-spacing-x-mobile md:px-spacing-x flex flex-col gap-7 justify-center items-center md:items-start text-white text-lg text-center md:text-start wrap-break-word">
        <h2 className="text-7xl/20 font-heading uppercase">{content?.name}</h2>
        <p className="sm:w-2/3 leading-9">{content?.bannerDescription}.</p>
        <div className="flex flex-wrap items-center gap-5 font-semibold">
          <button className="rounded-xl border border-purple-400 px-4 py-2">Explore Stories</button>
          <button className="rounded-xl bg-yellow-300 px-4 py-2 text-black">{isPartnerCategory ? "Partner with us": "Join the Conversation"}</button>
        </div>
      </div>
    </div>
  )
}

export default CategoryBanner

import Dropdowns from "@/components/archive/dropdowns"

export const generateMetadata = () => {
  return {
    title: 'Archive | Zikoko',
    description: "A collection of old stories"
  }
}

const Archive = () => {
  
  let content = <p className="text-center text-3xl font-semibold mt-10 font-heading">No selection made yet!</p>

  return (
    <section className="h-screen pt-spacing-t">
      <div className="h-100 bg-[url('/archive.png')] bg-cover px-spacing-x flex flex-col gap-8 justify-center text-purple-800">
        <h2 className="font-heading text-7xl uppercase font-semibold tracking-wide">Archives</h2>
        <hr className="w-50 border-2 text-yellow-500" />
        <p className="w-1/2 leading-8">Explore stories dating from 2018 to present. All you have to do is select a category, a subcategory and your preferred year.</p>
        <Dropdowns  />
      </div>

      <div className="px-spacing-x ">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5"></div>
      </div>
    </section>
  )
}

export default Archive

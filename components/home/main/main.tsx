import FeaturedCard from "./featured-card"
import SideCard from "./side-card"

const Main = () => {
    return (
        <main className="flex justify-between gap-4 h-fit">
            <FeaturedCard />
            <SideCard />
        </main>
    )
}

export default Main

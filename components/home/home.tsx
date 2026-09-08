import Categories from "./categories"
import Main from "./main/main"
import Latest from "./latest"
import TakeQuiz from "./take-quiz"
import Shows from "./shows"
import PartnerContent from "./partner-content"
import SectionWrapper from "../section-wrapper"


const Home = () => {
    return (
        <SectionWrapper>
            <Main />
            <Categories />
            <Latest />
            <TakeQuiz />
            <Shows />
            <PartnerContent />
        </SectionWrapper>
    )
}

export default Home

import PageWrapper from "../wrappers/page-wrapper"
import Main from "./main/main"
import Categories from "./categories"
import Latest from "./latest"
import TakeQuiz from "./take-quiz"
import Shows from "./shows"
import PartnerContent from "./partner-content"

const Home = () => {
    return (
        <PageWrapper>
            <Main />
            <Categories />
            <Latest />
            <TakeQuiz />
            <Shows />
            <PartnerContent />
        </PageWrapper>
    )
}

export default Home

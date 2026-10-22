import { whyUs } from "@/lib/partners"
import CardContainer from "./card/card-container"

const WhyUs = () => {
    return (
        <CardContainer data={JSON.parse(JSON.stringify(whyUs))} heading="why us" />
    )
}

export default WhyUs

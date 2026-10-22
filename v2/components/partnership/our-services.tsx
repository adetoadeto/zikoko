import { ourServices } from "@/lib/partners"
import CardContainer from "./card/card-container"

const OurServices = () => {
  return (
    <CardContainer data={JSON.parse(JSON.stringify(ourServices))} heading="What you can promote"/>
  )
}

export default OurServices

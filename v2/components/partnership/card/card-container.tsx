import Card from "./card"
import SubHeadingWrapper from "../subheading/sub-heading-wrapper"
import {PartnershipCardContainerProps} from "@/lib/interface-types"

const CardContainer = ({ data, heading }: PartnershipCardContainerProps) => {
    return (
        <div>
            <SubHeadingWrapper heading={heading} />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
                {data.map(item => <Card key={item.heading} {...item} />)}
            </div>
        </div>
    )
}

export default CardContainer

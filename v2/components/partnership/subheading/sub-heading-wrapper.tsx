import SubHeading from "./subheading"
import { PartnershipSubHeadingProps } from "@/lib/interface"

const SubHeadingWrapper = ({ heading }: PartnershipSubHeadingProps) => {
    return (
        <div className="flex justify-between items-center mb-7 gap-5">
            <span className="hidden min-[600px]:block bg-neutral-200 h-0.5 flex-1"></span>
            <SubHeading heading={heading} />
            <span className="hidden min-[600px]:block bg-neutral-200 h-0.5 flex-1"></span>
        </div>
    )
}

export default SubHeadingWrapper

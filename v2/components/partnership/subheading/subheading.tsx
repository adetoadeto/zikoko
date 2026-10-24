import { PartnershipSubHeadingProps } from "@/lib/interface"

const SubHeading = ({ heading }: PartnershipSubHeadingProps) => {
    return (
        <span className="block uppercase text-purple-700 tracking-wider font-semibold font-heading text-lg">{heading}</span>
    )
}

export default SubHeading

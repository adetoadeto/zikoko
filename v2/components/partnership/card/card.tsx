import CardIcon from "@/components/ui/card-icon"
import {PartnershipCardProps} from "@/lib/interface-types"

const Card = ({ icon, heading, content, color }: PartnershipCardProps) => {

    return (
        <div className="border border-neutral-300/70 rounded-xl p-4 shadow-md h-60">
            <CardIcon icon={icon} color={color} />
            <strong className="text-lg font-heading pt-5 py-3 inline-block capitalize">{heading}</strong>
            <p className="leading-7">{content}</p>
        </div>
    )
}

export default Card

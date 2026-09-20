import { ScrollWrapperProps } from '../../lib/interface'
import SubHeading from '../sub-heading'

const HorizontalScrollWrapper = ({ heading, icon, href, children }: ScrollWrapperProps) => {
    return (
        <div>
            <SubHeading title={heading} icon={icon} text={href} />
            <div className="h-70 mt-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 overflow-y-scroll">
                {children}
            </div>
        </div>
    )
}

export default HorizontalScrollWrapper

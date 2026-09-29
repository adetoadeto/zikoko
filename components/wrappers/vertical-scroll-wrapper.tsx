import { ScrollWrapperProps } from '../../lib/interface'
import SubHeading from '../sub-heading'

const VerticalScrollWrapper = ({ heading, icon, href, children }: ScrollWrapperProps) => {
    return (
        <div>
            <SubHeading title={heading} icon={icon} text={href} />
            <div className="h-70 mt-5 px-4 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-article-cards overflow-y-scroll overflow-x-hidden">
                {children}
            </div>
        </div>
    )
}

export default VerticalScrollWrapper

import { ScrollWrapperProps } from '@/lib/interface-types'
import SubHeading from '../ui/sub-heading'

const VerticalScrollWrapper = ({ heading, icon, href, children }: ScrollWrapperProps) => {
    return (
        <div>
            <SubHeading title={heading} icon={icon} text={href} />
            <div className="h-70 mt-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-article-cards overflow-y-scroll overflow-x-hidden">
                {children}
            </div>
        </div>
    )
}

export default VerticalScrollWrapper

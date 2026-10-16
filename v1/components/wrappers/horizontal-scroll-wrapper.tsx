import { ScrollWrapperProps } from "../../lib/interface"
import SubHeading from "../sub-heading"

const HorizontalScrollWrapper = ({ heading, icon, href, children }: ScrollWrapperProps) => {
  return (
    <div>
      <SubHeading title={heading} icon={icon} text={href} />
      <div className="pt-6 pb-3 overflow-x-scroll no-scrollbar">
        <div className="flex gap-article-cards">
          {children}
        </div>
      </div>
    </div>

  )
}

export default HorizontalScrollWrapper

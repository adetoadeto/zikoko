import SubHeading from "./subheading"

const SubHeadingWrapper = ({heading}) => {
    return (
        <div className="flex justify-between items-center mb-5">
            <span className="bg-neutral-200 h-0.5 w-1/3"></span>
            <SubHeading text={heading} />
            <span className="bg-neutral-200 h-0.5 w-1/3"></span>
        </div>
    )
}

export default SubHeadingWrapper

import SubHeading from "./subheading"
import Card from "./card"

const WhyUs = () => {
    return (
        <div className="flex gap-10" >
            <div className="flex flex-col justify-between w-60">
                <SubHeading text="why partner with us?" />
                <strong className="text-3xl flex flex-col gap-2">
                    <span>Real people.</span>
                    <span>Real impact.</span>

                </strong>
                <p className="leading-7 w-[90%]">We help you connect with people who care about what you do.</p>
            </div>

            <div className="flex gap-4 items-center w-[80%]">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default WhyUs

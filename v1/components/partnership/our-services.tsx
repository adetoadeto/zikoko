import Card from "./card"
import SubHeadingWrapper from "./sub-heading-wrapper"

const OurServices = () => {
  return (
    <div>
      <SubHeadingWrapper heading="What you can promote"/>
      <div className="flex justify-between gap-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default OurServices

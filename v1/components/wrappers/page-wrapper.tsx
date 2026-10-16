import { ChildrenProps } from "../../lib/interface"

const PageWrapper = ({ children }: ChildrenProps) => {
    return (
        <section className="px-spacing-x-mobile xl:px-spacing-x pt-spacing-t-mobile xl:pt-spacing-t flex flex-col gap-8">
            {children}
        </section>
    )
}

export default PageWrapper

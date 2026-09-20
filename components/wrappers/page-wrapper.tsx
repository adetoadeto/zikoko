import { PageWrapperProps } from "../../lib/interface"

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <section className="px-spacing-x pt-spacing-t flex flex-col gap-10">
            {children}
        </section>
    )
}

export default PageWrapper

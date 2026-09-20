import { MainArticleContentProps } from "@/lib/interface"

const MainArticleContent = ({ img }: MainArticleContentProps) => {
    return (
        <div>
            <div className="h-70 w-full rounded-lg my-7 bg-cover bg-center shadow-[0_0_9px] shadow-black/40" style={{ backgroundImage: `url(${img.src})` }}>
            </div>

            <div className="flex flex-col gap-4 leading-7">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, veritatis odio, ipsa rem dolore architecto sed earum, error fuga blanditiis quidem velit nulla non quaerat tempore corporis fugiat deserunt eaque accusamus suscipit enim! Quibusdam adipisci deleniti veritatis. Molestiae, cupiditate odit. Nihil tempora nam, voluptate debitis iusto suscipit? Corporis deserunt quasi minima, delectus quae nesciunt tempore nam a quos consectetur eaque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius, velit numquam, perferendis doloremque magnam officiis nesciunt, temporibus est maiores molestias et quam ad dolores vero? Officiis beatae illo quod ipsa sapiente quasi eveniet tenetur. Voluptates, ipsa consequatur! Quis dolorem quisquam itaque possimus. Sit eius modi, dolor perspiciatis temporibus voluptatibus nostrum accusantium omnis sint.</p>
                <p> Fugiat fugit voluptas vitae non a quidem dolore illum doloremque veniam repellat, voluptatem voluptatum necessitatibus repudiandae molestiae eligendi error impedit obcaecati nihil aperiam aspernatur ducimus quasi? Voluptatum ipsam tempore nostrum fugiat at? In nisi explicabo voluptates quibusdam, totam distinctio? Eveniet commodi dicta suscipit cum, nam totam.</p>
            </div>
        </div>
    )
}

export default MainArticleContent

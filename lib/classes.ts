import { StaticImageData } from "next/image";

export class SubCategory {
    constructor(public text: string, public icon: string) { }
}
export class Category {
    constructor(public icon: string, public href: string, public name: string, public description: string, public count: string, public color: string, public bannerImg: StaticImageData, public bannerDescription: string, public tags: string[], public subCategories: SubCategory[]) { }
}

export class Article {
    constructor(
        public img:StaticImageData, 
        public category:string,
        public categoryColor: string,
        public subCategory: string,
        public title: string,
        public duration: string,
        public author: string,
        public date: string,
        public featured?: boolean
    ){}
 
}
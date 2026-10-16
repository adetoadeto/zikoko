import { categories } from "./categories";

const explore = categories.slice(0, 5)
const more = categories.slice(5)

export const footerLinks = [
    {
        heading: "explore",
        lists: explore
    },
      {
        heading: "more",
        lists: more
    },
    // {
    //     heading: "company",
    //     lists: ["about us", "advertise", "careers", "contact us", "newsroom"]
    // },
    // {
    //     heading: "help",
    //     lists: ["faq", "privacy policy", "terms of use"]
    // },
]
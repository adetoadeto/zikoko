import alutaBanner from "@/public/banners/her.png"
import chopistBanner from "@/public/banners/chopist.png"
import citizenBanner from "@/public/banners/her.png"
import herBanner from "@/public/banners/her.png"
import manDemBanner from "@/public/banners/mandem.png"
import moneyBanner from "@/public/latest/img2.png"
import shipsBanner from "@/public/banners/ships.png"
import popBanner from "@/public/latest/img4.png"
import partnerBanner from "@/public/banners/partner.png"
import quizzesBanner from "@/public/banners/quizzes.png"

import quizImg1 from "@/public/quiz/img1.png"
import quizImg2 from "@/public/quiz/img2.png"
import quizImg3 from "@/public/quiz/img3.png"
import quizImg4 from "@/public/quiz/img4.png"
import quizImg5 from "@/public/quiz/img5.png"

import showsImg1 from "@/public/shows/img1.png"
import showsImg2 from "@/public/shows/img2.png"
import showsImg3 from "@/public/shows/img3.png"
import showsImg4 from "@/public/shows/img4.png"
import showsImg5 from "@/public/shows/img5.png"
import showsImg6 from "@/public/shows/img6.png"

export const categories = [
    {
        icon: "fa-graduation-cap",
        href: "aluta-and-chill",
        name: "Aluta & Chill",
        description: "stories on university life in Nigeria.",
        count: "120 articles",
        color: "blue",
        bannerImg: alutaBanner,
        bannerDescription: "Welcome to your source for everything to do with university and student life in Nigeria",
        tags: ["experiences", "gist", "expo"],
    },
    {
        icon: "fa-bowl-food",
        href: "chopist",
        name: "Chopist",
        description: "everything food, everything enjoyment",
        count: "120 articles",
        color: "red",
        bannerImg: chopistBanner,
        bannerDescription: "Everything food, everything enjoyment",
        tags: ["food", "enjoyment"],
    },
    {
        icon: "fa-flag",
        href: "citizen",
        name: "Citizen",
        description: "understand politics and governance",
        count: "84 articles",
        color: "green",
        bannerImg: citizenBanner,
        bannerDescription: "Understand politics, policy, governance - and take action. Follow us as we follow the news",
        tags: ["politics", "policy", "goverance"],
    },
    {
        icon: "fa-star",
        href: "her",
        name: "Her",
        description: "the community of african women",
        count: "180 articles",
        color: "purple",
        bannerImg: herBanner,
        bannerDescription: "Sharing experiences of african women from all walks of life. welcome to HER",
        tags: ["community", "african women"],
    },

    {
        icon: "fa-champagne-glasses",
        href: "man-dem",
        name: "Man Dem",
        description: "exploring the male experience.",
        count: "90 articles",
        color: "blue",
        bannerImg: manDemBanner,
        bannerDescription: "stories of men from all walks of life, here's all our content aimed at exploring the men's world",
        tags: ["men's gist"],
    },
    {
        icon: "fa-coins",
        href: "money",
        name: "Money",
        description: "",
        count: "90 articles",
        color: "green",
        bannerImg: moneyBanner,
        bannerDescription: "",
        tags: [""],
    },
    {
        icon: "fa-music",
        href: "pop",
        name: "Pop",
        description: "",
        count: "90 articles",
        color: "purple",
        bannerImg: popBanner,
        bannerDescription: "",
        tags: [""]
    },
    {
        icon: "fa-heart",
        href: "ships",
        name: "Ships",
        description: "",
        count: "90 articles",
        color: "pink",
        bannerImg: shipsBanner,
        bannerDescription: "",
        tags: [""]
    },
    {
        icon: "fa-dice",
        href: "quizzes",
        name: "Quizzes",
        description: "the antidote for boredom",
        count: "40 quizzes",
        color: "cyan",
        bannerImg: quizzesBanner,
        bannerDescription: "",
        tags: [""]
    },
    {
        icon: "fa-play",
        href: "shows",
        name: "Shows",
        description: "",
        count: "90 articles",
        color: "orange",
        bannerImg: herBanner,
        bannerDescription: "",
        tags: [""]
    },
    {
        icon: "fa-handshake",
        href: "partners-announcements",
        name: "Partners/Announcements",
        description: "",
        count: "90 articles",
        color: "purple",
        bannerImg: partnerBanner,
        bannerDescription: "",
        tags: [""]
    }
]

export const quiz = [
    {
        title: "which nigerian state fits your personality?",
        img: quizImg1
    },
    {
        title: "what kind of nigerian parent will you be?",
        img: quizImg2
    },
    {
        title: "which 2000s nigerian song are you?",
        img: quizImg3
    },
    {
        title: "how street smart are you?",
        img: quizImg4
    },
    {
        title: "which afrobeats artist matches your energy",
        img: quizImg5
    }
]

export const shows = [
    {
        title: "random thoughts",
        img: showsImg1,
        episodes: "20"
    },
    {
        title: "the review",
        img: showsImg2,
        episodes: "14"
    },
    {
        title: "just vibes",
        img: showsImg3,
        episodes: "9"
    },
    {
        title: "menu chat",
        img: showsImg4,
        episodes: "12"
    },
    {
        title: "z! confessions",
        img: showsImg6,
        episodes: "25"
    },
    {
        title: "young, famous & african",
        img: showsImg5,
        episodes: "15"
    }
]

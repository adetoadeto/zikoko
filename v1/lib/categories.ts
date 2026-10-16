import { Category, SubCategory } from "./classes"
import quizBanner from "@/public/categories/quiz/banner.png"
import alutaBanner from "@/public/categories/aluta_chill/banner.png"
import chopistBanner from "@/public/categories/chopist/banner.png"
import citizenBanner from "@/public/categories/citizen/banner.png"
import herBanner from "@/public/categories/her/banner.png"
import manDemBanner from "@/public/categories/mandem/banner.png"
import moneyBanner from "@/public/categories/money/banner.png"
import shipsBanner from "@/public/categories/ships/banner.png"
import showsBanner from "@/public/categories/shows/banner.png"
import popBanner from "@/public/categories/pop/banner.png"
import partnerBanner from "@/public/categories/partner/banner.png"

export const aluta_chill = new Category("graduation-cap", "aluta-and-chill", "Aluta & Chill", "stories on university life in Nigeria.", "120 articles", "blue", alutaBanner, "Welcome to your source for everything to do with university and student life in Nigeria", ["experiences", "gist", "expo"], [new SubCategory("aluta and chill", "graduation-cap"), new SubCategory("campus", "building-columns")])

export const chopist = new Category("bowl-food", "chopist", "Chopist", "everything food, everything enjoyment", "120 articles", "red", chopistBanner, "Everything food, everything enjoyment", ["food", "enjoyment"], [new SubCategory("drink", "martini-glass-citrus"), new SubCategory("eat", "cookie-bite"), new SubCategory("jollof road", "bowl-rice")])

export const citizen = new Category("flag", "citizen", "Citizen", "understand politics and governance", "84 articles", "green", citizenBanner, "Understand politics, policy, governance - and take action. Follow us as we follow the news", ["politics", "policy", "goverance"], [new SubCategory("1000 ways to japa", "plane-departure"), new SubCategory("abroad life", "passport"), new SubCategory("citizen history", "person"), new SubCategory("game of votes", "check-to-slot"), new SubCategory("navigating nigeria", "naira-sign"), new SubCategory("the nigerian voter", "person-booth"), new SubCategory("wait first!", "hand")]
)

export const her = new Category("star", "her", "Her", "the community of african women", "180 articles", "purple", herBanner, "Sharing experiences of african women from all walks of life. welcome to HER", ["community", "african women"], [new SubCategory("talk true", "eye"), new SubCategory("what she said", "microphone-lines")])

export const mandem = new Category("champagne-glasses", "man-dem", "Man Dem", "exploring the male experience.", "90 articles", "blue", manDemBanner, "Stories of men from all walks of life, here's all our content aimed at exploring the men's world", ["men's gist"], [new SubCategory("man like", "user-tie"), new SubCategory("my bro", "champagne-glasses")]
)

export const money = new Category("coins", "money", "Money", "Savings or Current? Relatable money struggles", "90 articles", "green", moneyBanner, "We establish if money struggles are the same all over the world, in a fun, relatable way, of course. Let’s help you make the most out of money.", ["savings", "current", "spend"], [new SubCategory("a week in the life", "calendar-week"), new SubCategory("hustle", "person-running"), new SubCategory("hustle print", "hammer"), new SubCategory("love currency", "briefcase"), new SubCategory("naira life", "naira-sign"), new SubCategory("personal finance", "sack-dollar")])

export const pop = new Category("music", "pop", "Pop", "everything entertainment and pop culture", "90 articles", "purple", popBanner, "Here, we talk about everything you watch, read or listen to at the moment. Get your daily fix of everything entertainment and pop culture", ["entertainment", "pop", "culture"], [new SubCategory("#bump this", "headphones"), new SubCategory("fashion", "hat-cowboy"), new SubCategory("just imagine", "lightbulb"), new SubCategory("made in nigeria", "flag"), new SubCategory("queens of nollywood", "crown"), new SubCategory("so you don't have to", "bell-slash")])

export const ships = new Category("heart", "ships", "Ships", "stories about relationships among young Nigerians", "90 articles", "pink", shipsBanner, "“God, when?” or “God forbid”? All the stories about love, friendships, family and various other relationships among young Nigerians", ["love", "family", "friendships"], [new SubCategory("love life", "heart"), new SubCategory("sex life", "venus-mars"), new SubCategory("sunken ships", "heart-crack")]
)

export const quizzes = new Category("dice", "quizzes", "quizzes", "quizzes to keep you busy, the antidote for boredom", "40 quizzes", "cyan", quizBanner, "What kind of bread are you? Are you smarter than a five year old? Will you ever find love? These are the kinds of important questions Zikoko quiz will answer for you.", ["questions"], [new SubCategory("funds", "coins"), new SubCategory("gbedu", "music"), new SubCategory("generation wars", "users"), new SubCategory("green white quiz", "flag"), new SubCategory("i too sabi", "face-grin"), new SubCategory("in your feels", "water"), new SubCategory("long throat", "spoon"), new SubCategory("movie buff", "film")])

export const shows = new Category("play", "shows", "Shows", "hilarious content in quality visuals toooooooo", "90 articles", "orange", showsBanner, "Experience all our bat-shit crazy and hilarious content in quality visuals toooooooo.", ["hilarious", "content"],
    [
        new SubCategory("spendi#g", "-"),
        new SubCategory("play house: the valentine dating show", "-"),
        new SubCategory("women in pop", "-"),
        new SubCategory("zikoko ships valentine special", "-"),
        new SubCategory("zikoko game show 1", "-"),
        new SubCategory("zikoko game show 2", "-"),
        new SubCategory("badly behaved", "-"),
        new SubCategory("zikoko pop", "-"),
        new SubCategory("vs the world", "-"),
        new SubCategory("zikoko ships", "-"),
        new SubCategory("nigerians talk", "-"),
        new SubCategory("#endsars", "-"),
        new SubCategory("the couch", "-"),
        new SubCategory("hacked", "-"),
        new SubCategory("quickie", "-"),
        new SubCategory("isolation diary", "-"),
        new SubCategory("good time", "-"),
        new SubCategory("vrsus", "-"),
        new SubCategory("zikoko's blind date", "-"),
        new SubCategory("jollof road", "-"),
        new SubCategory("the classics volume 2", "-"),
        new SubCategory("the classics volume 5", "-"),
        new SubCategory("the classics volume 4", "-"),
        new SubCategory("her", "-"),
        new SubCategory("creators", "-"),
        new SubCategory("underground", "-")])

export const partners = new Category("-handshake", "partners-announcements", "Partners", "", "90 articles", "purple", partnerBanner, "", ["partners"], [new SubCategory("announcements", "bullhorn")])

export const categories: Record<string, any>[] = JSON.parse(JSON.stringify([aluta_chill, chopist, citizen, her, mandem, money, pop, ships, shows, quizzes, partners]))
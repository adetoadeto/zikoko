import { PartnershipCard } from "./classes"
import mastercard from "@/public/logo/mastercard.png"
import meta from "@/public/logo/meta.png"
import moniepoint from "@/public/logo/moniepoint.png"
import mtn from "@/public/logo/mtn.png"
import nivea from "@/public/logo/nivea.png"
import opay from "@/public/logo/opay.png"
import paystack from "@/public/logo/paystack.png"
import spotify from "@/public/logo/spotify.png"
import uba from "@/public/logo/uba.png"
import youTube from "@/public/logo/youtube.png"

export const partnersLogo = [moniepoint, mtn, opay, paystack, spotify, uba, youTube, meta, mastercard, nivea]

export const whyUs = [
    new PartnershipCard("users", "real people, real impact", "We help you connect with people who care about what you do.", "cyan"),
    new PartnershipCard("users", "highly engaged", "Our audience reads, reacts and shares. Your content gets the attention it deserves.", "purple"),
    new PartnershipCard("bullseye", "targeted reach", "Reach the right people with content that speaks their language.", "red"),
    new PartnershipCard("chart-line", "boost brand awareness", "increase visibility and build trust with content that resonates.", "green"),
    new PartnershipCard("star", "flexible options", "from sponsored stories to custom projects, we've got options that fit your goals.", "orange")
]

export const ourServices = [
    new PartnershipCard("newspaper", "articles & stories", "get your message in front of our readers.", "blue"),
    new PartnershipCard("bell-concierge", "products & services", "showcase what you offer to the right audience.", "red"),
    new PartnershipCard("calendar", "events", "drive awareness and get more people to show up.", "green"),
    new PartnershipCard("video", "vidoes & campaigns", "tells your story in a way that sticks", "orange"),
    new PartnershipCard("bullhorn", "announcements", "share updates that matter.", "cyan"),
    new PartnershipCard("people-carry-box", "community & CSR", "highlight the impact you'are making", "purple")
]

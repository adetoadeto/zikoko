import {Fraunces, Manrope} from "next/font/google"

export const fraunces = Fraunces({
    variable: "--font-fraunces",
    subsets: [ 'latin', 'latin-ext', 'vietnamese'],
})

export const manrope = Manrope({
    variable: "--manrope",
    subsets: ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"],
})
import type { Metadata } from "next";
import { fraunces, manrope, } from "@/components/lib/fonts";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Home | Zikoko!",
  description: "Come for the fun, stay for the culture!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css" integrity="sha512-QeR2VH+lsBE5LSAe1Q5EnTBbe7XTBubt8dG93Y7gidSgdMCr8nVqKcfKAMyN96SV8KDbZVTDXChatu5G2KQGzg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="min-h-full overflow-x-hidden text-base text-black-100 font-body">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

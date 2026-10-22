"use client"
import ServerErrorPage from "@/components/errors/500-page";
import NoInternetPage from "@/components/errors/no-internet-page";
import { fraunces, manrope, } from "@/lib/fonts";

const GlobalErrorPage = ({ error}: { error: Error}) => {

  const noInternet = error.message === 'ECONNREFUSED'

  return (
    <html lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css" integrity="sha512-QeR2VH+lsBE5LSAe1Q5EnTBbe7XTBubt8dG93Y7gidSgdMCr8nVqKcfKAMyN96SV8KDbZVTDXChatu5G2KQGzg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="min-h-screen overflow-x-hidden text-base text-neutral-800 font-body">
        {noInternet ? <NoInternetPage /> : <ServerErrorPage/>}


      </body>
    </html>

  )
}

export default GlobalErrorPage

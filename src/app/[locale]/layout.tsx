import type { Metadata } from "next";


import "./globals.css";


import NavBar from "./_components/navigation/NavBar";
import Footer from "./_components/footer/Footer";



export const metadata: Metadata = {
  title: "La Gite du Bois Renard",
  description: "Gite Deux Sevres | Gite South West France | Gite Sud Ouest France | Gite holiday | Gite Vacances",
};

export type LayoutProps = {
  children: React.ReactNode
  params: Promise<{
    locale: string,
  }>
}




export default async function RootLayout({
  children, params
}: LayoutProps) {

  const {locale}  = await params

  return (
    <html lang={locale}>
      <head>

      </head>
      <body>
       
        {/*<NavBar locale={locale} />*/ }
 
        {children}
     
      </body>
    </html>
  );
}

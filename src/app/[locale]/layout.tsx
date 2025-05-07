import type { Metadata } from "next";


import "./globals.css";


import NavBar from "./_components/navigation/NavBar";
import Footer from "./_components/footer/Footer";



export const metadata: Metadata = {
  title: "La Gite du Bois Renard - Deux Sevres",
  description: "Gites Deux Sevres | Gites South West France | Gite Sud Ouest France | Gite holiday | Gite Vacances",
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
        <meta name="keywords" content="Gite Deux Sevres, Gites South West France, Gites Sud Ouest France, Gites holiday, Gites Vacances " />
        <meta name="description" content="Situated in Nouvelle Aquitaine in southwestern France, welcome to gites de bois renard, a traditional charentaise farmhouse built in the 1840’s in the rural village of Lorigne. Our little hamlet, Bois Renard, is located between the market towns of Sauze Vaussais and Chef Boutonne, surrounded by fields and woodland, and five minutes’ drive to all your daily needs - supermarket, pharmacies, restaurants, bars and bakeries." />
        <meta property="og:title" content="La Gite du Bois Renard - Deux Sevres" />
        <meta property="og:description" content="Situated in Nouvelle Aquitaine in southwestern France, welcome to gites de bois renard, a traditional charentaise farmhouse built in the 1840’s" />
        <meta property="og:image" content="https://www.giteduboisrenard.fr/Gite_Bois_Renard_Photo_FB.jpg" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />



      </head>
      <body>
       
        {/*<NavBar locale={locale} />*/ }
 
        {children}
     
      </body>
    </html>
  );
}

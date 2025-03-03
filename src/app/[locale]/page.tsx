import Image from "next/image";
import GCalendar from "./_components/booking/Calendar";
import Splash from "./_components/splash/Splash";
import ContactForm from "./_components/contact/ContactForm";
import CarouselWrapper from "./_components/carousel/Carousel";
import About from "./_components/about/About";
import Footer from "./_components/footer/Footer";

import GiteWrapper from "./_components/booking/GiteWrapper";
import { Params } from "next/dist/server/request/params";

import { getTranslations } from "next-intl/server";

import { TranslationStrings } from "./_components/booking/unusedComponents/BookingWrapper";


import { LayoutProps } from "./layout";


export default async function Home({params}: LayoutProps) {
  

  const {locale}: {locale: string} = await params

  const trans = await getTranslations("Contact")

  const t: TranslationStrings = {
    title: trans("Title"),
    name: trans("Name"),
    email: trans("Email"),
    tel: trans("Tel"),
    message: trans("Message")
  }



  return (
    <div className="flex w-[100vw]  flex-col items-center " >
      
      <Splash locale={locale} />
      <div className=" w-[100vw] space-y-10 bg-fixed bg-center bg-cover font-sans mb-10" style={{backgroundImage: "url(/logo-artwork/off-white/GDBR_logo-20.png)" }}>
          <About />
          <div className="flex w-full flex-col justify-center  items-center space-y-10 ">
          
          <CarouselWrapper />

          {/*<BookingWrapper />*/}

          <ContactForm t={t} />

          <GiteWrapper />
        

          </div>
      </div>
      <Footer />

    </div>
  );
}

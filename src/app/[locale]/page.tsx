import Image from "next/image";
import GCalendar from "./_components/booking/Calendar";
import Splash from "./_components/splash/Splash";
import ContactForm from "./_components/contact/ContactForm";
import CarouselWrapper from "./_components/carousel/Carousel";
import About from "./_components/about/About";
import Footer from "./_components/footer/Footer";
import BookingWrapper from "./_components/booking/BookingWrapper";
import { Params } from "next/dist/server/request/params";

import { getTranslations } from "next-intl/server";

import { TranslationStrings } from "./_components/booking/BookingWrapper";





export default async function Home({params}: {params: Params}) {
  

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
      <div className=" w-[100vw] space-y-10 bg-fixed bg-center bg-cover custom-img font-sans mb-10">
          <About />
          <div className="flex w-full flex-col justify-center  items-center space-y-10 ">
          
          <CarouselWrapper />

          <BookingWrapper />

          <ContactForm t={t} />
        

          </div>
      </div>
      <Footer />

    </div>
  );
}

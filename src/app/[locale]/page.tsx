import Image from "next/image";
import GCalendar from "./_components/booking/Calendar";
import Splash from "./_components/splash/Splash";
import ContactForm from "./_components/contact/ContactForm";
import CarouselWrapper from "./_components/carousel/Carousel";
import About from "./_components/about/About";
import Footer from "./_components/footer/Footer";
import BookingWrapper from "./_components/booking/BookingWrapper";
import { Params } from "next/dist/server/request/params";



export default async function Home({params}: {params: Params}) {
  

  const {locale}: {locale: string} = await params

  return (
    <div className="flex w-[100vw]  flex-col items-center " >
      
      <Splash locale={locale} />
      <div className=" w-[100vw] space-y-10 bg-fixed bg-center bg-cover custom-img font-sans">
        <About />
          <div className="flex w-full flex-col justify-center  items-center space-y-10 ">
          
          <CarouselWrapper />

          <BookingWrapper />

          <ContactForm />
        

          </div>
      </div>
      <Footer />

    </div>
  );
}

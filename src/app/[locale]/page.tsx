import Image from "next/image";
import GCalendar from "./_components/Calendar";
import Splash from "./_components/splash/Splash";
import ContactForm from "./_components/contact/ContactForm";
import CarouselWrapper from "./_components/carousel/Carousel";
import About from "./_components/about/About";
import Footer from "./_components/footer/Footer";
import { Params } from "next/dist/server/request/params";



export default async function Home({params}: {params: Params}) {
   
  const calendarId : string | undefined = await process.env.USER1
  const api1: string | undefined = await process.env.CALENDAR_API1
  const calendarId2 : string | undefined = await process.env.USER2
  const api2: string | undefined = await process.env.CALENDAR_API2

  const {locale}: {locale: string} = await params

  return (
    <div className="flex w-[100vw]  flex-col items-center " >
      
      <Splash locale={locale} />
      <div className=" w-[100vw] space-y-10 bg-fixed bg-center bg-cover custom-img font-sans">
        <About />
        <div className="flex w-full flex-col justify-center  items-center space-y-10 ">
          
          <CarouselWrapper />

          <div className="flex w-2/3 justify-center">
            <GCalendar api={api1} calendarId={calendarId} name='Gite One' />
            <GCalendar api={api2} calendarId={calendarId2} name='Gite Two' />
          </div>  

          <ContactForm />
        

          </div>
      </div>
      <Footer />

    </div>
  );
}

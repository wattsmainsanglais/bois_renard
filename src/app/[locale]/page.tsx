import Image from "next/image";
import GCalendar from "./_components/Calendar";
import Splash from "./_components/splash/Splash";
import ContactForm from "./_components/contact/ContactForm";



export default async function Home() {
   
  const calendarId : string | undefined = await process.env.USER1
  const api1: string | undefined = await process.env.CALENDAR_API1
  const calendarId2 : string | undefined = await process.env.USER2
  const api2: string | undefined = await process.env.CALENDAR_API2

  return (
    <div className="flex w-full flex-col justify-center  items-center " >
      
      <Splash />
      <div className=" h-screen  mt-12 mb-12 bg-fixed bg-center bg-cover custom-img">
         
        <div className="flex w-full flex-col justify-center  items-center m ">
          <div className="flex w-2/3 justify-center">

          
            <GCalendar api={api1} calendarId={calendarId} name='Gite One' />
            <GCalendar api={api2} calendarId={calendarId2} name='Gite Two' />
          </div>  
          <ContactForm />

          </div>
        </div>
    </div>
  );
}

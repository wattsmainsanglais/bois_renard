import Image from "next/image";
import GCalendar from "./_components/Calendar";
import Splash from "./_components/splash/Splash";
import ContactForm from "./_components/contact/ContactForm";



export default async function Home() {
  
  const api: string | undefined = await process.env.CALENDAR_API

  return (
    <div className="flex w-full flex-col justify-center  items-center " >
      
      <Splash />
      <GCalendar api={api} />

      <ContactForm />

      

    </div>
  );
}

import Image from "next/image";
import GCalendar from "./_components/Calendar";
import Splash from "./_components/splash/Splash";



export default async function Home() {
  
  const api: string | undefined = await process.env.CALENDAR_API

  return (
    <div >
      
      <Splash />
      <GCalendar api={api} />

    </div>
  );
}

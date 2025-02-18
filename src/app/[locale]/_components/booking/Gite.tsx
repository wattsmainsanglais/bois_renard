import GiteDescription from "./components/GiteDescription";
import GCalendar from "./Calendar";
import GiteImages from "./components/GiteImages";

import { TranslationStrings } from "./BookingWrapper";
import { Messages } from "@/global";
import { EventEmitterReferencingAsyncResource } from "node:events";
import { StaticImageData } from "next/image";

const calendarId : string | undefined = await process.env.USER1;
const api1: string | undefined = await process.env.CALENDAR_API1;
const calendarId2 : string | undefined = await process.env.USER2;
const api2: string | undefined = await process.env.CALENDAR_API2;

export interface Images {
    imageSrc: string[]
}


export default function Gite({gt}: {gt: TranslationStrings }){

const images: Images = {
    imageSrc: ["https://yavuzceliker.github.io/sample-images/image-1.jpg", "https://yavuzceliker.github.io/sample-images/image-2.jpg", "https://yavuzceliker.github.io/sample-images/image-3.jpg"]

}


return (
    <div className="grid grid-cols-2 grid-rows-2 h-screen">
        <div className="col-start-1 col-end-1 row-span-1 bg-rose-100">
            <GiteDescription desc={gt.fDesc} />
            
        </div>
        <div className="col-start-1 col-end-1 row-start-2 row-span-1 ">
            <GiteImages images={images} />
        </div>
        <div className="col-start-2 col-end-2 row-span-2 bg-rose-100">
             <GCalendar bgcolor="emerald-700" api={api1} calendarId={calendarId} name='Gite One' />:
            
        </div>

                
    </div>

)

}
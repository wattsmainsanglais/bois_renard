'use client'

import GiteDescription from "./components/GiteDescription";
import GCalendar from "./Calendar";
import GiteImages from "./components/GiteImages";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import { TranslationStrings } from "./unusedComponents/BookingWrapper"
import { Envs } from "./GiteWrapper";

import { useState } from "react";


export interface Images {
    imageSrc: string[]
}


export default function Gite({gt, envs}: {gt: TranslationStrings, envs: Envs }){

    const [giteOne, setGite] = useState(true)

    function toggleGite(){
        setGite(!giteOne)
    }

const images: Images = {
    imageSrc: ["https://yavuzceliker.github.io/sample-images/image-1.jpg", "https://yavuzceliker.github.io/sample-images/image-2.jpg", "https://yavuzceliker.github.io/sample-images/image-3.jpg"]

}


return (
    <div className="w-full flex flex-col items-center">
        <div className="flex items-center space-x-2 bg-white">
        <Label htmlFor="gite" className="text-forestgreen">Switch gite</Label>
        <Switch id="gite" className="text-forestgreen" onClick={toggleGite} />
        
        </div>

       { giteOne? 
        <div className="w-full grid grid-cols-2 grid-rows-2 h-screen bg-forestgreen opacity-85">
            <div className="col-start-1 col-end-1 row-span-1 bg-white">
                <GiteDescription desc={gt.fDesc} title="Fox Cottage" />
                
            </div>
            <div className="col-start-1 col-end-1 row-start-2 row-span-1 ">
                <GiteImages images={images} />
            </div>
            <div className="col-start-2 col-end-2 row-span-2 bg-white flex flex-col items-center align-center justify-center">
                <GCalendar bgcolor="emerald-700" api={envs.api1} calendarId={envs.calendarId} name='Fox Cottage' />:
                
            </div>

                    
        </div> : 
        <div className="w-full grid grid-cols-2 grid-rows-2 h-screen bg-forestgreen opacity-85">
            <div className="col-start-1 col-end-1 row-span-1 bg-white">
                <GiteDescription desc={gt.cDesc} title="Castor Lodge" />
                
            </div>
            <div className="col-start-1 col-end-1 row-start-2 row-span-1 ">
                <GiteImages images={images} />
            </div>
            <div className="col-start-2 col-end-2 row-span-2 bg-white flex flex-col items-center align-center justify-center">
                <GCalendar bgcolor="emerald-700" api={envs.api2} calendarId={envs.calendarId2} name='Castor Lodge' />:
                
            </div>

                
        </div>
        }
    </div>


    

)

}
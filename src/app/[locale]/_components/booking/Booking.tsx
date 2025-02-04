'use client'


import { useState } from "react";

import GCalendar from "./Calendar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Messages } from "@/global";
import { TranslationStrings } from "./BookingWrapper";

export default function Booking({t, api1, api2, calendarId, calendarId2}: {t: TranslationStrings, api1: string|undefined, api2: string|undefined, calendarId: string|undefined, calendarId2: string|undefined}){

    const [giteOne, setGite] = useState(true)

    function toggleGite(){
        setGite(!giteOne)
    }

    return(
        <div id="Booking" className="flex flex-col items-center space-y-2 bg-forestgreen opacity-85 text-white p-10">
            <h1>{t.Title}</h1>
            <p>{t.P1}</p>
            <p>{t.P2}</p>

            <div >

                <div className="flex flex-col items-center w-full justify-center p-8 z-5 bg-white text-forestgreen rounded-md">
                    <div className="flex items-center space-x-2">
                        <Label htmlFor="gite">Switch gite</Label>
                        <Switch id="gite" onClick={toggleGite} />
                        
                    </div>
                    <div className="flex w-full " >
                        {
                            giteOne? 
                            <GCalendar bgcolor="emerald-700" api={api1} calendarId={calendarId} name='Gite One' />:
                            
                            <GCalendar bgcolor="emerald-500" api={api2} calendarId={calendarId2} name='Gite Two' />

                        }
                        
                    </div>    
                </div>  


            </div>




        </div>


    )


}
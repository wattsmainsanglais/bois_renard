

import { Messages } from "@/global"
import { TranslationStrings } from "./unusedComponents/BookingWrapper"
import Gite from "./Gite"
import { useTranslations } from "next-intl"
import Booking from "./components/Booking"

export interface Envs {
    [key: string]: string | undefined;
}

 const envs: Envs = {
    calendarId :  process.env.USER1,
    api1:  process.env.CALENDAR_API1,
    calendarId2 : process.env.USER2,
    api2: process.env.CALENDAR_API2

}


export default function GiteWrapper(){

    const giteTranslations = useTranslations("Gites")

    const gt: TranslationStrings = {
        fDesc: giteTranslations("FoxCottage.Desc"),
        cDesc: giteTranslations("CastorsLodge.Desc")
        
    }



    return (
        <div id="Gites" className="w-screen bg-forestgreen p-2 flex flex-col justify-center">
            <Booking />
            <Gite gt={gt} envs={envs}  />
        </div>
    )

}
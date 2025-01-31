
import { getTranslations } from "next-intl/server";
import Booking from "./Booking";
import { Messages } from "@/global";

export interface TranslationStrings {
    [key: string]: string;
}

export default async function BookingWrapper(){

    const calendarId : string | undefined = await process.env.USER1;
    const api1: string | undefined = await process.env.CALENDAR_API1;
    const calendarId2 : string | undefined = await process.env.USER2;
    const api2: string | undefined = await process.env.CALENDAR_API2;
    
    const trans =  await getTranslations("Booking");

    const t: TranslationStrings = {
        Title: trans("Title"),
        P1: trans("P1"),
        P2: trans("P2")

    }

    return(
        <Booking t={t} api1={api1} api2={api2} calendarId={calendarId} calendarId2={calendarId2} />
    )
}
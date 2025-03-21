
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { Envs } from "../../_components/booking/GiteWrapper"
import { TranslationStrings } from "../../_components/booking/unusedComponents/BookingWrapper"

import Gite from "../../_components/booking/Gite"

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    
    const { slug } = await params

    const giteTranslations = await getTranslations(`Gites.${slug}`)

    const t: TranslationStrings = {
      desc: giteTranslations("Desc")
    }

     const envs: Envs = {
        calendarId :  process.env.USER1,
        api1:  process.env.CALENDAR_API1,
        calendarId2 : process.env.USER2,
        api2: process.env.CALENDAR_API2
    
    }

    return (
      <div id="Gites" className="w-screen bg-forestgreen opacity-95 p-2 flex flex-col justify-center">
      <Gite gt={t} envs={envs} route={slug} />
      
      </div>
    )

  }
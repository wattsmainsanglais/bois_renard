
import { MessageKeys, NamespaceKeys, NestedKeyOf, useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { Envs } from "../../_lib/types"
import { TranslationStrings } from "../../_lib/types"
import Link from "next/link"
import { RxHome } from "react-icons/rx"

import Gite from "../../_components/booking/Gite"
import NavBar from "../../_components/navigation/NavBar"


export default async function Page({
    params
  }: {
    params: Promise<{ slug: "foxcottage" | "castorslodge" , locale: string  }>,
    
  }) {
    
    const { slug } = await params
    const {locale} = await params


    const giteTranslations= await getTranslations(`Gites.${slug}`)

    const t: TranslationStrings = {
      desc: giteTranslations("Desc")
    }

     const envs: Envs = {
        calendarId :  process.env.USER1,
        api1:  process.env.CALENDAR_API1,
        calendarId2 : process.env.USER2,
        api2: process.env.CALENDAR_API2
    
    }

    const caseFunction = async (s: string) => {
      if(s == 'foxcottage'){
          let st = "Fox Cottage"
          return st
      }
      if(s == 'castorslodge'){
          let st = "Castors Lodge"
          console.log(st)
          return st
      }

  }

  let caseTitle = await caseFunction(slug)

    return (
      <div className=" w-screen h-auto space-y-10 bg-fixed bg-center bg-cover font-sans " style={{backgroundImage: "url(/logo-artwork/off-white/GDBR_logo-20.png)" }}>
      <div id="Gites" className="w-screen bg-forestgreen opacity-85 p-2 flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <Link href='/'>
            <RxHome size={32} className="text-xl" color="white" />
          </Link>
          <NavBar locale={locale} route={caseTitle}/>
        </div>
        
      <Gite gt={t} envs={envs} route={caseTitle} />
      
      </div>
      </div>
    )

  }
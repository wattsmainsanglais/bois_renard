

import { Messages } from "@/global"
import { TranslationStrings } from "./BookingWrapper"
import Gite from "./Gite"
import { useTranslations } from "next-intl"



export default function GiteWrapper(){

    const giteTranslations = useTranslations("Gites")

    const gt: TranslationStrings = {
        fDesc: giteTranslations("FoxCottage.Desc"),
        cDesc: giteTranslations("CastorsLodge.Desc")
        
    }


    return (
        <div id="Gites" className="w-screen bg-rose-800 p-2 flex justify-center">
           <Gite gt={gt}  />
        </div>
    )

}
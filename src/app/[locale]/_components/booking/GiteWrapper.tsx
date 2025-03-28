

import { Messages } from "@/global"
import { TranslationStrings } from "../../_lib/types"
import Gite from "./Gite"
import { useTranslations } from "next-intl"
import Booking from "./components/Booking"



export default function GiteWrapper(){

    const giteTranslations = useTranslations("Gites")

    const gt: TranslationStrings = {
        fDesc: giteTranslations("foxcottage.Desc"),
        cDesc: giteTranslations("castorslodge.Desc")
        
    }



    return (
        <div id="Gites" className="w-screen bg-forestgreen p-2 flex flex-col justify-center">
            <Booking />
            {/*<Gite gt={gt} envs={envs}  />*/}
        </div>
    )

}
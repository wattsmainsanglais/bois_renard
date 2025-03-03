
import { getTranslations } from "next-intl/server"
import { TranslationStrings } from "../unusedComponents/BookingWrapper"
import { TranslationValues } from "next-intl"

export default async function Booking(){

  const t = await getTranslations("Booking")

    return(
        <div id="Booking" className="flex flex-col items-center space-y-2 bg-forestgreen opacity-85 text-white p-10">
            <h1>{t("Title")}</h1>
           

            <div >

                <div className="flex flex-col items-center w-full justify-center p-8 z-5 bg-white text-forestgreen rounded-md">
                    <p>{t("P1")}</p>
                    <p>{t("P2")}</p>
                    <p>{t("P3")}</p>
                    <p>{t("P4")}</p>
                </div>  


            </div>




        </div>


    )


}

import Image from "next/image";
import splash from "@/public/Gite_Bois_Renard_Photo_FB.jpg"

import NavBar from "../navigation/NavBar";

export default function Splash({locale}: {locale: string}){
/* bg-[url('/Gite_Bois_Renard_Photo_FB.jpg')] */

    return(
        <div className="bg-[url(/Gite_Bois_Renard_Photo_FB.jpg)] w-screen h-72 lg:h-screen bg-[auto_340px] md:bg-[auto-450px] md:h-80 lg:bg-cover bg-center flex items-start justify-center " >
            <NavBar locale={locale} /> 
           {/* <Image
                src={splash}
                alt='Gite du Bois Renard'

            />*/}


        </div>
    )
}
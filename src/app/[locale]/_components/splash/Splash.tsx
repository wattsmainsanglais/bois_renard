
import Image from "next/image";
import splash from "@/public/Gite_Bois_Renard_Photo_FB.jpg"

import NavBar from "../navigation/NavBar";

export default function Splash({locale}: {locale: string}){
/* bg-[url('/Gite_Bois_Renard_Photo_FB.jpg')] */

    return(
        <div className="w-screen h-screen bg-cover bg-center flex items-start justify-center" style={{backgroundImage: "url(/Gite_Bois_Renard_Photo_FB.jpg)"}}>
            <NavBar locale={locale} /> 
           {/* <Image
                src={splash}
                alt='Gite du Bois Renard'

            />*/}


        </div>
    )
}
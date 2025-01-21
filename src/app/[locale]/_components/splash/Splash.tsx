
import Image from "next/image";
import splash from "@/public/Gite_Bois_Renard_Photo_FB.jpg"


export default function Splash(){


    return(
        <div className="w-screen">

            <Image
                src={splash}
                alt='Gite du Bois Renard'

            />


        </div>
    )
}
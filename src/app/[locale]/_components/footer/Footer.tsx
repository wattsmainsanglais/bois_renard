
import Image from "next/image"
import GreenLogo from "@/public/logo-artwork/Forest Green/GDBR_Logo-06.png"
import LightGreen from "@/public/logo-artwork/Light Green/GDBR_Logo-11.png"

export default function Footer(){


    return (
        <div className="flex flex-col items-center justify-center border-t-2 border-solid">
            <div className=" align-center w-1/4  ">
                <div>
                    <Image 
                        src={GreenLogo}
                        alt='Le Gite du Bois Renard'
                    /> 
                </div>

            </div>
            <div>
                <h2 className="font-bold text-forestgreen">Siret - 94182277700012 </h2>
            </div>
        </div>
    )
}
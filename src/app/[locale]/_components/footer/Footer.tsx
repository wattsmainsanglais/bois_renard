
import Image from "next/image"
import GreenLogo from "@/public/logo-artwork/Forest Green/GDBR_Logo-06.png"

export default function Footer(){


    return (
        <div className="flex justify-center border-2 border-solid">
        <div className=" align-center w-1/4  ">
            <div>
                <Image 
                    src={GreenLogo}
                    alt='Le Gite du Bois Renard'
                />

                
            </div>

        </div>
        </div>
    )
}
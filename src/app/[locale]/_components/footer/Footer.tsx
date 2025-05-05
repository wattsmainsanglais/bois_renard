
import Image from "next/image"
import GreenLogo from "@/public/logo-artwork/Forest Green/GDBR_Logo-06.png"
import LightGreen from "@/public/logo-artwork/Light Green/GDBR_Logo-11.png"
import { FaFacebook } from "react-icons/fa"
import Link from "next/link"

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
            
            <div className="flex gap-3">
                <div>
                <Link target='_blank' href="https://www.facebook.com/profile.php?id=61559694284876"><FaFacebook size={25} color='black' /></Link> 
                </div>
                <h2 className="font-bold text-forestgreen">Siret - 94182277700012 </h2>
                
            </div>
        </div>
    )
}
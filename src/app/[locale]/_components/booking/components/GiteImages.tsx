import { StaticImageData } from "next/image";

import  Image from "next/image";
import { Images } from "../Gite";




export default function GiteImages({images}: {images: Images }){

    return (
        <div className="flex">
            {images.imageSrc.map((i, index)=> (
                <Image 
                    src={i}
                    alt='gite image'
                    width={128}
                    height={128}
                    key={index}

                />
            ))}
        </div>

    )

}
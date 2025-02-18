import { StaticImageData } from "next/image";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"

import  Image from "next/image";
import { Images } from "../Gite";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";




export default function GiteImages({images}: {images: Images }){

    return (
        <div className="flex">
            {images.imageSrc.map((i, index)=> (
            <Dialog>
                <DialogTrigger asChild>
                    <Image 
                        src={i}
                        alt='gite image'
                        width={128}
                        height={128}
                        key={index}

                    />
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogTitle aria-description="gite photo">

                    </DialogTitle>
                    <DialogDescription>
                        <Image 
                                src={i}
                                alt='gite image'
                                width={960}
                                height={960}
                                key={index}

                            />
                    </DialogDescription>
                </DialogContent>
            </Dialog>
            ))}
        </div>

    )

}
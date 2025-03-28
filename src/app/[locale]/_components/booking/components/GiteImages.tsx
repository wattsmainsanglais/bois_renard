import { StaticImageData } from "next/image";
import { Images } from "./giteImagesFolder";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"

import  Image from "next/image";

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";


export default function GiteImages({images, route}: {images: Images, route: string }){


    return (
        <div className="flex flex-wrap">
            {route === 'Fox Cottage' ? images.imagesFox.map((i, index)=> (
            <Dialog key={index}>
                <DialogTrigger asChild >
                    <div  className="p-2" >
                    <Image 
                        src={i}
                        alt='gite image'
                        width={128}
                        height={128}
                        

                    />
                    </div>
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
            )): 
            images.imagesCastor.map((i, index)=> (
                <Dialog key={index}>
                    <DialogTrigger asChild >
                        <div  className="p-2" >
                        <Image 
                            src={i}
                            alt='gite image'
                            width={128}
                            height={128}
                            
    
                        />
                        </div>
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
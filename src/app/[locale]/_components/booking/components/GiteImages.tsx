'use client'

import { StaticImageData } from "next/image";
import { Images } from "./giteImagesFolder";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"

import  Image from "next/image";

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ChevronLeft, ChevronRight } from "lucide-react";


function Overlay({show, setShow}: {show: boolean, setShow: Dispatch<SetStateAction<boolean>>}){

    function handleClose(){
        setShow(!show)
    }

    return (
        <div className="fixed inset-0 z-50 bg-forestgreen/90 w-full" style={{display: show? 'block': 'none'}} onClick={handleClose}  >
        
        </div>

    )
}


export default function GiteImages({images, width, route}: {images: string[], width: number,  route?: string }){

    const [active, setActive] = useState(0) 
    const [show, setShow] = useState(false)

    function handleClick(index: number){
        
        setActive(index)
        console.log(index)
        console.log(images[active])
        handleClose()
    }

    function handleClose(){
        setShow(!show)
    }

    const onNext = () => {
        if (active < images.length - 1) {
          setActive(active + 1);
        }
      };
    
      const onPrev = () => {
        if (active > 0) {
          setActive(active - 1);
        }
      };

    const maxLength = images.length

    return (
        <div className="flex flex-wrap justify-center">
            {images.map((i, index)=> (
            <Dialog key={index}>
                <DialogTrigger asChild >
                    <div  className="p-2" >
                    <Image 
                        src={i}
                        alt='gite image'
                        width={width}
                        height={width}
                        onClick={() => handleClick(index)}

                    />
                    </div>
                </DialogTrigger>
                {/*<DialogContent className="sm:max-w-md">
                    <DialogTitle aria-description="gite photo">

                    </DialogTitle>
                    <DialogDescription>
                        <Button onClick={onPrev}>Prev</Button>
                        {
                         active &&   
                            <Image 
                                src={i}
                                alt='gite image'
                                width={960}
                                height={960}
                                key={index}

                            />

                        }
                        <Button onClick={onNext}>Next</Button>
                        
                    </DialogDescription>
                </DialogContent>*/}
            </Dialog>
            ))
            }
           
                
                <Overlay show={show} setShow={setShow} />
                <div id="modal" style={{display: show? 'flex': 'none'}} className="fixed left-[50%] top-[50%] z-50 w-4/5 lg:w-full max-w-lg translate-x-[-50%] translate-y-[-50%]  border bg-white p-10 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg flex flex-row justify-center items-center">
                    <Button  className="z-50 active:text-slate-500" style={{color: active === 0 ? 'white': 'inherit'}} onClick={onPrev}><ChevronLeft /></Button> 
                      
                          
                    <Image 
                        src={images[active]}
                        alt='gite image'
                        width={width * 3}
                        height={width * 3}
                        onClick={handleClose}

                    />
                          

                     
                    <Button className="z-50 active:text-slate-500" style={{color: active === maxLength - 1 ? 'white': 'inherit'}} onClick={onNext}><ChevronRight  /></Button> 
                </div> 
                
         
        </div>

    )

}
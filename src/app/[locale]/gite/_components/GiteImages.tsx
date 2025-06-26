'use client'


import {
    Dialog,
    
    DialogTrigger,
  } from "@/components/ui/dialog"

import  Image from "next/image";


import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";

import { ChevronLeft, ChevronRight } from "lucide-react";


function Overlay({show, setShow}: {show: boolean, setShow: Dispatch<SetStateAction<boolean>>}){

    function handleClose(){
        setShow(!show)
    }

    return (
        <div id="Overlay" className="fixed inset-0 z-50 bg-forestgreen/90 w-full" style={{display: show? 'block': 'none'}} onClick={handleClose}  >
        
        </div>

    )
}


export default function GiteImages({images, width, route, flow}: {images: string[], width: number,  route?: string, flow: string }){

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
        <div id="giteImages" className={`grid grid-cols-2 grid-rows-6 lg:grid-cols-6 lg:grid-rows-2  lg:${flow}`}>
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
                <div id="modal"  className={` ${show? "flex" : "hidden"} fixed left-[50%] top-[50%] z-50 w-[90%] lg:w-1/2 translate-x-[-50%] translate-y-[-50%] border bg-white p-5 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] flex-col lg:flex-row rounded-lg justify-center lg:justify-between items-center`}>
                    <Button size="sm"  className="z-50 active:text-slate-500 m-2" style={{color: active === 0 ? 'white': 'inherit'}} onClick={onPrev}><ChevronLeft /></Button> 
                      
                          
                    <Image 
                        src={images[active]}
                        alt='gite image'
                        width={width * 3.5 }
                        height={width * 1}
                        onClick={handleClose}
                        

                    />
                          

                     
                    <Button size="sm" className="z-50 active:text-slate-500 m-2" style={{color: active === maxLength - 1 ? 'white': 'inherit'}} onClick={onNext}><ChevronRight  /></Button> 
                </div> 
                
         
        </div>

    )

}
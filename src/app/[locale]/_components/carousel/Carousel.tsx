import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"


export default function CarouselWrapper(){

    return(

        <div id="Gallery" className=" flex justify-center w-2/5 h-[75vh] mt-5 mb-12" >

            <Carousel className="py-20" >
                <CarouselContent>
                    <CarouselItem  >
                        <Image 
                            src="https://yavuzceliker.github.io/sample-images/image-1.jpg"
                            alt="Test"
                            width={650}
                            height={400}
                        />
                    </CarouselItem>
                    <CarouselItem >
                        <Image 
                                src="https://yavuzceliker.github.io/sample-images/image-2.jpg"
                                alt="Test"
                                width={650}
                                height={400}
                               
                            />
                    </CarouselItem >
                    <CarouselItem  >
                        <Image 
                                src="https://yavuzceliker.github.io/sample-images/image-3.jpg"
                                alt="Test"
                                width={650}
                                height={400}
                               
                            />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="text-white bg-forestgreen" />
                <CarouselNext className="text-white bg-forestgreen"  />
            </Carousel>


        </div>
    )
}
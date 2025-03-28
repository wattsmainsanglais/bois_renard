import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"


const carouselImages = [
    '/gites_pics/Outside/ou1.jpg', '/gites_pics/Outside/ou2.jpg','/gites_pics/Outside/ou4.jpg','/gites_pics/Outside/ou5.jpg','/gites_pics/Outside/ou6.jpg','/gites_pics/Outside/ou7.jpg','/gites_pics/Outside/ou8.jpg','/gites_pics/Outside/ou13.jpg','/gites_pics/Outside/ou12.jpg',
]

export default function CarouselWrapper(){

    return(

        <div id="Gallery" className=" flex justify-center w-2/5 h-[75vh] mt-5 mb-12" >

            <Carousel className="py-20" >
                <CarouselContent>
                    {carouselImages.map((i, index) => (

                    <CarouselItem key={index}  >
                        <Image 
                            src={i}
                            alt="Test"
                            width={650}
                            height={400}
                        />
                    </CarouselItem>
                    ))}
                  
                </CarouselContent>
                <CarouselPrevious className="text-white bg-forestgreen" />
                <CarouselNext className="text-white bg-forestgreen"  />
            </Carousel>


        </div>
    )
}

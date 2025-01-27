import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function CarouselWrapper(){

    return(

        <div className=" flex justify-center w-2/5 h-[50vh] mt-5" >

            <Carousel>
                <CarouselContent>
                    <CarouselItem >
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
                    </CarouselItem>
                    <CarouselItem >
                        <Image 
                                src="https://yavuzceliker.github.io/sample-images/image-3.jpg"
                                alt="Test"
                                width={650}
                                height={400}
                               
                            />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </div>
    )
}
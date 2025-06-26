import Image from "next/image"


import GiteImages from "../../gite/_components/GiteImages";


const carouselImages = [
    '/gites_pics/Outside/ou9.jpg' , '/gites_pics/Outside/ou2.jpg' ,'/gites_pics/Outside/ou3.jpg' ,'/gites_pics/Outside/ou14.jpg', '/gites_pics/Outside/ou11.jpg', '/gites_pics/Outside/ou1.jpg', '/gites_pics/Outside/ou2.jpg','/gites_pics/Outside/ou4.jpg','/gites_pics/Outside/ou5.jpg','/gites_pics/Outside/ou6.jpg','/gites_pics/Outside/ou7.jpg','/gites_pics/Outside/ou8.jpg','/gites_pics/Outside/ou13.jpg','/gites_pics/Outside/ou12.jpg','/gites_pics/Outside/ou15.jpg'
]

export default function CarouselWrapper(){

    return(
        <div id="Gallery" className="flex justify-center ">
            <GiteImages images={carouselImages} width={200} flow="grid-flow-col-dense" />
        </div>
        /*
        <ImageList sx={{ width: 1000, height: 450 }} variant="woven" cols={5} gap={8}>
            {carouselImages.map((item, index) => (
            <ImageListItem key={index}>
                <img
                    srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item}?w=161&fit=crop&auto=format`}
                    alt='alt'
                    loading="lazy"
                />
            </ImageListItem>
            ))}
            </ImageList>
    */
    /*    <div id="Gallery" className=" flex justify-center w-2/5 h-[75vh] mt-5 mb-12" >

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


        </div>*/
    )
}

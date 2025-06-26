import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import ca1 from '/gite_pics/Large.ca1.jpg'

import fo1 from '/gites_pics/Small/fo1.jpg'
import { StaticImageData } from 'next/image'


export interface Images {
    imagesCastor: string[]
    imagesFox: string[]
}


export const images: Images = {

    imagesCastor: ['/gites_pics/Large/ca1.jpg', '/gites_pics/Large/ca2.jpg', '/gites_pics/Large/ca3.jpg', '/gites_pics/Large/ca4.jpg', '/gites_pics/Large/ca5.jpg', '/gites_pics/Large/ca6.jpg',  '/gites_pics/Large/ca11.jpg', '/gites_pics/Large/BG_Living_room.jpg', '/gites_pics/Large/BG_Living_Room2.jpg', '/gites_pics/Large/BG_Shower.jpg', '/gites_pics/Large/BG_Kitchen.jpg','/gites_pics/Large/BG_Bed.jpg','/gites_pics/Large/BG_Bed2.jpg', '/gites_pics/Large/ca7.jpg', '/gites_pics/Large/ca8.jpg', '/gites_pics/Large/ca10.jpg',],
    imagesFox: ['/gites_pics/Small/fo1.jpg', '/gites_pics/Small/LG_Bath.jpg', '/gites_pics/Small/LG_Bed1.jpg', '/gites_pics/Small/LG_Bed2.jpg', '/gites_pics/Small/LG_Bed3.jpg', '/gites_pics/Small/LG_Living1.jpg', '/gites_pics/Small/LG_Living2.jpg', '/gites_pics/Small/LG_Shower.jpg']
}
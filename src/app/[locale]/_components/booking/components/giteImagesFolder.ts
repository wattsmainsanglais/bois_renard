import ca1 from '/gite_pics/Large.ca1.jpg'

import fo1 from '/gites_pics/Small/fo1.jpg'
import { StaticImageData } from 'next/image'


export interface Images {
    imagesCastor: string[]
    imagesFox: string[]
}


export const images: Images = {

    imagesCastor: ['/gites_pics/Large/ca1.jpg', '/gites_pics/Large/ca2.jpg', '/gites_pics/Large/ca3.jpg', '/gites_pics/Large/ca4.jpg', '/gites_pics/Large/ca5.jpg', '/gites_pics/Large/ca6.jpg', '/gites_pics/Large/ca7.jpg', '/gites_pics/Large/ca8.jpg'],
    imagesFox: ['/gites_pics/Small/fo1.jpg']
}
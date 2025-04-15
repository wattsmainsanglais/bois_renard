
import { TranslationValues } from 'next-intl';
import {useTranslations} from 'next-intl';

import { FaWater, FaCar } from 'react-icons/fa';
import {SiAnimalplanet} from 'react-icons/si'


export default function Activities(){

    const t = useTranslations("Activities")

    const animals = [t("1"), t("2"), t("3")]
    const water = [t("4"), t("5"), t("6"), t("7")]
    const dayTrips = [t("8"), t("9"), t("10")]

    return (

        <div id="Activities" className="mt-10 mb-10 w-[100vw] p-10 bg-blue-300 opacity-75 flex flex-col items-center space-y-4 text-slate-700 ">

            <h1 className="font-bold text-xl">{t("Title")}</h1>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-2 w-full  '>
               <div className='bg-white p-5 rounded-md opacity-85 h-auto lg:h-56 flex flex-col justify-center items-start lg:items-center w-full lg:w-3/5'>
                <span className='p-2'><SiAnimalplanet size={48} color='gray' /></span>
                {animals.map((a, index) => (
                    <p className='p-1'  key={index}>{'>'} {a}</p>
                ))}
               </div>
               <div className='bg-white p-5 rounded-md opacity-85 h-auto lg:h-56 flex flex-col justify-center items-start lg:items-center w-full lg:w-4/5'>
                <span className='p-2'><FaWater color='blue' size={32}  /></span>
                {water.map((a, index) => (
                    <p className='p-1'  key={index}>{'>'} {a}</p>
                ))}
               </div>
               <div className='bg-white p-5 rounded-md opacity-85 h-auto lg:h-56 flex flex-col justify-center items-start lg:items-center w-full lg:w-3/5'>
               <span className='p-2'><FaCar color='green' size={32}  /></span>
                {dayTrips.map((a, index) => (
                    <p className='p-1' key={index}>{'>'} {a}</p>
                ))}
               </div>


            </div>
           
        </div>


    )

}
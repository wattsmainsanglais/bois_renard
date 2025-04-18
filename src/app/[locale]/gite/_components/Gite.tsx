'use client'

import GiteDescription from "./GiteDescription";
import GCalendar from "./Calendar";
import GiteImages from "./GiteImages";

import { TranslationStrings } from "../../_lib/types"
import { Envs } from "../../_lib/types";

import { useState } from "react";
import {images} from './giteImagesFolder'


export default function Gite({gt, envs, route}: {gt: TranslationStrings, envs: Envs, route: string | undefined}){



return (
    <div className="w-full flex flex-col items-center pt-5">
        
       
        <div className="w-full flex flex-col  lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:h-screen ">
            <div className="flex w-1/1 lg:col-start-1 lg:col-end-1 lg:row-span-1 bg-slate-300 rounded-md">
                <GiteDescription t={gt} title={route ? route : 'Untitled'} />
                
            </div>
            <div className="flex flex-wrap w-1/1 pt-3 pb-3 md:p-0 lg:col-start-1 lg:col-end-1 lg:row-start-2 lg:row-span-1 ">
                <GiteImages images={route === 'Fox Cottage' ? images.imagesFox: images.imagesCastor} route={route ? route : 'Untitled'} width={128} />
            </div>
            <div className="lg:col-start-2 lg:col-end-2 lg:row-span-2 bg-slate-300 flex flex-col items-center align-center justify-center rounded-md md:ml-1">
                <GCalendar bgcolor="emerald-700" api={route === 'Fox Cottage' ? envs.api1 :envs.api2} calendarId={route === 'Fox Cottage' ? envs.calendarId : envs.calendarId2} name={route ? route : 'Untitled'} />:
                
            </div>

                
        </div>
        
    </div>


    

)

}
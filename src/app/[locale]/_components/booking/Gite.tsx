'use client'

import GiteDescription from "./components/GiteDescription";
import GCalendar from "./Calendar";
import GiteImages from "./components/GiteImages";

import { TranslationStrings } from "../../_lib/types"
import { Envs } from "../../_lib/types";

import { useState } from "react";
import {images} from './components/giteImagesFolder'


export default function Gite({gt, envs, route}: {gt: TranslationStrings, envs: Envs, route: string | undefined}){



return (
    <div className="w-full flex flex-col items-center pt-5">
        
       
        <div className="w-full flex flex-col  md:grid md:grid-cols-2 md:grid-rows-2 md:h-screen ">
            <div className="flex w-1/1 md:col-start-1 md:col-end-1 md:row-span-1 bg-slate-300 rounded-md">
                <GiteDescription desc={gt.desc} title={route ? route : 'Untitled'} />
                
            </div>
            <div className="flex flex-wrap w-1/1 pt-3 pb-3 md:p-0 md:col-start-1 md:col-end-1 md:row-start-2 md:row-span-1 ">
                <GiteImages images={images} route={route ? route : 'Untitled'} />
            </div>
            <div className="md:col-start-2 md:col-end-2 md:row-span-2 bg-slate-300 flex flex-col items-center align-center justify-center rounded-md md:ml-1">
                <GCalendar bgcolor="emerald-700" api={envs.api2} calendarId={envs.calendarId2} name={route ? route : 'Untitled'} />:
                
            </div>

                
        </div>
        
    </div>


    

)

}
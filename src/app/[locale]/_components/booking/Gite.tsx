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
        <div className="flex items-center space-x-2 bg-white">
        
        
        </div>
       
        <div className="w-full grid grid-cols-2 grid-rows-2 h-screen ">
            <div className="col-start-1 col-end-1 row-span-1 bg-slate-300">
                <GiteDescription desc={gt.desc} title={route ? route : 'Untitled'} />
                
            </div>
            <div className="col-start-1 col-end-1 row-start-2 row-span-1 ">
                <GiteImages images={images} route={route ? route : 'Untitled'} />
            </div>
            <div className="col-start-2 col-end-2 row-span-2 bg-slate-300 flex flex-col items-center align-center justify-center">
                <GCalendar bgcolor="emerald-700" api={envs.api2} calendarId={envs.calendarId2} name={route ? route : 'Untitled'} />:
                
            </div>

                
        </div>
        
    </div>


    

)

}
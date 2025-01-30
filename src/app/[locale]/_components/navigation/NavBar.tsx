import {useEffect, useState} from 'react';

import Image from "next/image";

import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from "./LanguageSwitcher";

import NavItemsResponsive from './NavItemsResponsive';


export interface NavList  {
        title: string,
        id: string
       } 
    

export default async function NavBar({locale}: {locale: string}){

    const t = await getTranslations("Nav.Navlist")
    
    const navList: NavList[] = [{title: t("About"), id: 'About'}, {title: t("Contact"), id: 'Contact'}, {title: t("Booking"), id: 'Booking'}, {title: t("Faq"), id: 'Faq'},  {title: t("Gallery"), id: 'Gallery'}];

    return (
   
    <div className="flex justify-center w-[99vw]">
       
        <div className="flex sm:justify-end md:justify-end lg:justify-center " >
           <NavItemsResponsive navList={navList}  />
        </div>
        <div className="flex w-[10vw] justify-end m-1 ">
          <LanguageSwitcher locale={locale} />

        </div>


    </div>
   
    )
}
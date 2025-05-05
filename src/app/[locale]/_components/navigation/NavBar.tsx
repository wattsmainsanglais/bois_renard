import {useEffect, useState} from 'react';

import Image from "next/image";

import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from "./LanguageSwitcher";
import Link from 'next/link';

import NavItemsResponsive from './NavItemsResponsive';

import { NavList } from '../../_lib/types';
import { FaFacebook } from 'react-icons/fa';

export default async function NavBar({locale, route}: {locale: string, route?: string|undefined}){

    const t = await getTranslations("Nav.Navlist")
    
    const navList: NavList[] = [{title: t("About"), id: 'About'}, {title: t("Contact"), id: 'Contact'}, {title: t("Booking"), id: 'Booking'}, {title: t("Activities"), id: 'Activities'},  {title: t("Gallery"), id: 'Gallery'}];

    return (
   
    <div className="flex justify-start md:justify-center w-[99vw]">
       
        <div className="flex w-[100%] justify-start align-start items-start md:justify-end lg:justify-center  " >
           <NavItemsResponsive navList={navList} route={route} />
        </div>
        <div className="flex w-[10vw] items-center gap-3 justify-end mr-2">
          <Link target='_blank' href="https://www.facebook.com/profile.php?id=61559694284876"><FaFacebook size={20} color='white' /></Link> 
          <LanguageSwitcher locale={locale} />

        </div>


    </div>
   
    )
}
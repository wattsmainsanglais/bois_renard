import {useEffect, useState} from 'react';

import { Theme, Flex, Box, Text, TabNav } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css";

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
    <Theme data-is-root-theme='false' accentColor='amber' scaling='100%' panelBackground='translucent'  >
    <Flex justify='between' align='center' width='100vw' top='0'  style={{backgroundColor: 'white'}}>
        <Flex justify='start' pl='2'>

        

        </Flex>
        <Flex justify={{initial:'end' ,xs: 'end', sm: 'end', md: 'end', lg: 'center'}} gap='5' width='60vw' >
           <NavItemsResponsive navList={navList}  />
        </Flex>
        <Flex width='10vw' ml='1' mr={{initial: '2', xs: '2', sm: '2', md: '5'}} justify='end'>
          <LanguageSwitcher locale={locale} />

        </Flex>
    </Flex>
    </Theme>
    )
}
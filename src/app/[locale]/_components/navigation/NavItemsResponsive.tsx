'use client'
import {useEffect, useState} from 'react';


import TabView from './TabView';
import DropdownView from './DropdownView';


import { NavList } from './NavBar';


export default function NavItemsResponsive({navList, route}: {navList: NavList[], route?: string | undefined }){

    
    return(
       <>
        <TabView navList={navList} route={route} />
        <DropdownView navList={navList} route={route} />
      </> 
    )

}
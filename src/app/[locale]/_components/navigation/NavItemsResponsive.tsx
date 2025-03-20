'use client'
import {useEffect, useState} from 'react';


import TabView from './TabView';
import DropdownView from './DropdownView';


import { NavList } from './NavBar';


export default function NavItemsResponsive({navList}: {navList: NavList[]}){
/*
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth }: { innerWidth: number | undefined } = window;
    if (typeof window !== 'undefined') {

      return { innerWidth };
    }


  }


  useEffect(() => {

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

   */ 
    
    return(
       <>
        <TabView navList={navList} />
        <DropdownView navList={navList} />
      </> 
    )

}
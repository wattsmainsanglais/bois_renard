'use client'

import { useRouter } from "next/router"
import { Text, TabNav } from "@radix-ui/themes";
import { useState, useEffect } from "react";

import { tabNavLinkPropDefs } from "@radix-ui/themes/props";


import { NavList } from "./NavBar";
import { setLazyProp } from "next/dist/server/api-utils";

export default function TabView({navList}: {navList: NavList[]}){


  
    return (
        <TabNav.Root size='2'  >
        {navList.map((item, index) => (
            
            <TabNav.Link  key={index} href={`#${item.id}`}><Text size='4'>{item.title}</Text></TabNav.Link>
        ))}
        
        </TabNav.Root>
    )

}
'use client'

import { useRouter } from "next/router"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
 import Link from "next/link";





import { NavList } from "./NavBar";
import { setLazyProp } from "next/dist/server/api-utils";

export default function TabView({navList}: {navList: NavList[]}){


  
    return (
        <NavigationMenu  >
            <NavigationMenuList>
                {navList.map((item, index) => (
                  <NavigationMenuItem key={index}> 
                    <Link href={`#${item.id}`} legacyBehavior passHref>
                        <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center bg-none px-4 py-2 text-sm text-white font-medium hover:border-b hover:border-b-solid hover:border-green-300 transition-all " ><p className="text-lg  hover:text-green-100 active:text-green-300  active:text-lg transition-all">{item.title}</p></NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem> 
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )

}
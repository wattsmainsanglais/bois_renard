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





import { NavList } from "../../_lib/types";
import { setLazyProp } from "next/dist/server/api-utils";

export default function TabView({navList, route}: {navList: NavList[], route?: string|undefined}){
 

  
    return (
        <NavigationMenu className="hidden sm:hidden md:flex lg:flex "  >
            <NavigationMenuList>
                {navList.map((item, index) => (
                  <NavigationMenuItem key={index}> 
                    <Link href={route ? `/#${item.id}` : `#${item.id}`} legacyBehavior passHref>
                        <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center bg-none px-4 py-2 text-sm text-white font-medium hover:border-b-2 hover:border-b-solid hover:border-white active:border-none transition-all " ><p className="text-lg active:text-emerald-800 active:text-lg transition-all">{item.title}</p></NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem> 
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )

}
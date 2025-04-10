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
            <NavigationMenuList className="text-2xl">
                <NavigationMenuItem> 
                    <NavigationMenuTrigger className="inline-flex h-9 w-max items-center justify-center bg-none px-4 py-2 text-2xl text-white font-medium active:border-none transition-all " >Gites</NavigationMenuTrigger>
                    <NavigationMenuContent className="shadow-lg shadow-slate-100 border-none bg-forestgreen/70 ">

                        <Link href='/gite/foxcottage' legacyBehavior passHref>
                            <NavigationMenuLink className="inline-flex h-9 w-max items-center justify-center bg-none px-4 py-2 text-white font-medium  hover:text-slate-300 active:border-none transition-all " ><p className="active:text-emerald-800 text-xl transition-all">Fox Cottage</p></NavigationMenuLink>
                        </Link>
                        <Link href='/gite/castorslodge' legacyBehavior passHref>
                            <NavigationMenuLink className="inline-flex h-9 w-max items-center justify-center bg-none px-4 py-2 text-white font-medium  hover:text-slate-300 active:border-none transition-all " ><p className="active:text-emerald-800 text-xl transition-all">Castors Lodge</p></NavigationMenuLink>
                        </Link>

                    </NavigationMenuContent>
                    
                </NavigationMenuItem>  
                {navList.map((item, index) => (
                  <NavigationMenuItem key={index}> 
                    <Link href={route ? `/#${item.id}` : `#${item.id}`} legacyBehavior passHref>
                        <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center bg-none px-4 py-2 text-white font-medium hover:border-b-2 hover:border-b-solid hover:border-white active:border-none transition-all " ><p className=" active:text-emerald-800  transition-all">{item.title}</p></NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem> 
                ))}
                

            </NavigationMenuList>
        </NavigationMenu>
    )

}
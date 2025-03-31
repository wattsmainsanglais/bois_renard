'use client'

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { RxChevronDown } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


export default function LanguageSwitcher({locale}: {locale: string}){

    const pathname = usePathname()
    const currentRoute = pathname.slice(3)

    return (
        <>
        <DropdownMenu >
            <DropdownMenuTrigger className="flex items-center ring-none border-none shadow-none text-white">
                    
                    {locale}<RxChevronDown className="text-white"/>
                    
            </DropdownMenuTrigger>
            
            <DropdownMenuContent className="bg-white" >
                        
                        <Link  href={'/en'+currentRoute}><DropdownMenuItem className="hover:bg-forestgreen hover:text-emerald-50 " ><p>en</p></DropdownMenuItem></Link>
                        <Link  href={'/fr'+currentRoute}><DropdownMenuItem className="hover:bg-forestgreen hover:text-emerald-50"><p>fr</p></DropdownMenuItem></Link>
                        
                   
            </DropdownMenuContent>
        </DropdownMenu>
        
        </>


    )
}
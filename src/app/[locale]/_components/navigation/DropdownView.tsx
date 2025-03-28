'use client'

import Link from 'next/link';


import { Button } from '@/components/ui/button';
import { RxHamburgerMenu } from "react-icons/rx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { NavList } from '../../_lib/types';


export default function DropdownView({navList, route}: {navList: NavList[] , route?: string|undefined}){

    return (
        <div className="flex sm:flex md:hidden lg:hidden ">
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
            
                    <RxHamburgerMenu size={30} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>

                {navList.map((i, index) => (
                    <DropdownMenuItem key={index}><Link href={route ?`/#${i.id}` : `#${i.id}`}><p className="text-lg">{i.title}</p></Link></DropdownMenuItem>
                ))}
        
            </DropdownMenuContent>
        </ DropdownMenu>
      </div>
    
        
    )
}
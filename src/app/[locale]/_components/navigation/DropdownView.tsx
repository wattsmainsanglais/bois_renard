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
        <div className="flex sm:flex md:hidden lg:hidden text-white pl-2 pr-2 ">
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
              
            
                    <RxHamburgerMenu size={30} />
              
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-forestgreen/90'>

                {navList.map((i, index) => (
                    <DropdownMenuItem key={index}><Link href={route ?`/#${i.id}` : `#${i.id}`}><p className="text-lg text-white">{i.title}</p></Link></DropdownMenuItem>
                ))}
        
            </DropdownMenuContent>
        </ DropdownMenu>
      </div>
    
        
    )
}
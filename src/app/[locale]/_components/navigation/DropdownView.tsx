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

import { NavList } from './NavBar';


export default function DropdownView({navList}: {navList: NavList[]}){

    return (
        
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline">
            
                    <RxHamburgerMenu size={30} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>

                {navList.map((i, index) => (
                    <DropdownMenuItem key={index}><Link href={`#${i.id}`}><p className="text-lg">{i.title}</p></Link></DropdownMenuItem>
                ))}
        
            </DropdownMenuContent>
        </ DropdownMenu>
      
    
        
    )
}
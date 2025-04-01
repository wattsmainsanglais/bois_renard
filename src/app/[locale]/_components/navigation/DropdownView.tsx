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
    DropdownMenuSub,
    DropdownMenuSubTrigger
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
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="text-lg text-white">Gites</DropdownMenuSubTrigger>
                        <DropdownMenuContent className='bg-slate-500/90'>
                            <DropdownMenuItem>
                                <Link href='/gite/foxcottage' legacyBehavior passHref>
                                    <p className="text-lg text-white active:text-emerald-800 active:text-xl transition-all">Fox Cottage</p>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href='/gite/castorslodge' legacyBehavior passHref>
                                    <p className="text-lg text-white active:text-emerald-800 active:text-xl transition-all">Castors Lodge</p>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenuSub>
                    
                    
            </DropdownMenuContent>
        </ DropdownMenu>
      </div>
    
        
    )
}
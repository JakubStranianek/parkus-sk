"use client"

import Image from "next/image"
import data from "../data.json"
import clsx from "clsx"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
    const [open, setOpen] = useState(true)

    const handleItemClick = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <nav className="py-10 flex flex-col lg:flex-row items-center justify-between">
       <div className="w-full flex justify-between items-center">
       <Link href={"/"}><Image src={"logoParkus.svg"} width={180} height={40} alt="Logo Parcus-SK"/></Link>

        {/* MOBILE MENU*/}
        <div className="lg:hidden cursor-pointer">
            {open ? 
                <svg onClick={() => {setOpen(!open)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                :
                <svg onClick={() => {setOpen(!open)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            }            
        </div>
       </div>

        <ul className="hidden lg:flex gap-14 items-center">
            {data.navbar.map(index => {
                return (
                    <li key={index.id + ". " + index.name} className={clsx("whitespace-nowrap hover:underline hover:underline-offset-8",
                       {"border rounded-md border-black px-4 py-1 hover:no-underline hover:bg-black hover:text-white hover:transition-colors" : index.name === "Kontakt"}
                    )}>
                        <Link href={index.href} className="cursor-pointer"
                        onClick={() => handleItemClick(index.idHref)}
                        >
                            {index.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
        

        {open ? 
          ""
            :
          <ul className="w-full flex flex-col py-10 justify-end gap-3 lg:hidden">
            {data.navbar.map(index => {
                return (
                    <li key={index.id + ". " + index.name}>
                        <Link href={index.href} className="cursor-pointer"
                        onClick={() => {handleItemClick(index.idHref); setOpen(true)}}>
                            {index.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
            }
    </nav>
  )
}

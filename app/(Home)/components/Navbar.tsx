import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiSubstack } from "react-icons/si";


export default function Navbar() {
    const socials = [{
        link:  "https://www.linkedin.com/in/singh-pranay/",
        label: "Linkedin",
        icon: SiLinkedin
    },
    {
        link:  "https://github.com/pranaySinghDev",
        label: "Github",
        icon: SiGithub
    },
    {
        link:  "https://thedevtimes.substack.com/",
        label: "Substack",
        icon: SiSubstack
    }]
  return (
    <nav className=" py-10 flex justify-between items-center animate-move-down">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-cyan-500 -rotate-2">Pranay Singh 🧙🏻‍♀️</h1>
        <div className="flex items-center gap-5">
            {socials.map((social,index)=>{
                const Icon = social.icon
                return <Link href={social.link} key={index} aria-label={social.label}>
                    <Icon className="w-5 h-5 hover:scale-150 transition-all"></Icon>
                </Link>
            })}
        </div>
    </nav>
  )
}

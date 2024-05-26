import React from 'react'

export default function Footer() {
  return (
    <div className="py-10 flex justify-between border-t mt-10">
        <div>
          <p>© 2024 TheDevTimes, Inc.</p>
        </div>
        <div className="flex items-center text-sm">
          <p>Loosely designed in <a href="https://www.figma.com/" className= "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Figma (opens in a new tab)">Figma</a> and coded in <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Visual Studio Code (opens in a new tab)">Visual Studio Code</a> by yours truly.<br/> Built with<a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Next.js (opens in a new tab)"> Next.js</a><a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)">, Tailwind CSS</a>, deployed with<a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Vercel (opens in a new tab)">Vercel</a>.</p>
        </div>
    </div>
  )
}



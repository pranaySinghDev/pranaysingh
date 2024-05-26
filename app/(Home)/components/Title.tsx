import React from 'react'

export default function Title({text}:{text:string}) {
  return (
    <div className="py-20 flex animate-move-down">
        <h1 className="text-3xl font-bold"> {text} </h1>
    </div>
  )
}

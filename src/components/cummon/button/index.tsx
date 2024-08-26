import React from 'react'

type PropsType = {
    title : string
}

export default function ButtonBlue({title}:PropsType) {
  return (
    <button 
	className="group relative overflow-hidden bg-blue-600 focus:ring-4 focus:ring-blue-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center">
	<span className="z-40">{title}</span>
	<div
		className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000">
	</div>
</button>
  )
}

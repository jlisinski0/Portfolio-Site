'use client'

import { NavItems } from './NavItems'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<nav className='w-full h-18 bg-accentTwo pt-3 px-3'>
			<div className='flex justify-between w-full h-full max-w-300 mx-auto bg-red-600 rounded-2xl mx-4'>
				<div>
					<img src='' alt='' />
				</div>
				<ul className='hidden'>
					{NavItems.map(item => (
						<li className='cursor-pointer' key={item.id}>
							<Link href={item.href}>{item.name}</Link>
						</li>
					))}
				</ul>
				<button onClick={() => setIsVisible(prev => !prev)} className='cursor-pointer p-4 h-full w-12 relative'>
					<div className='flex flex-col justify-center gap-0.5 w-full h-full relative'>
						<span className='bg-black w-full h-0.5 block'></span>
						<span className='bg-black w-full h-0.5 block'></span>
					</div>
				</button>
			</div>
			{isVisible && <div>test</div>}
		</nav>
	)
}

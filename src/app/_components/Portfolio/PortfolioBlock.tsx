'use client'

import Image from 'next/image'
import { PortfolioItems } from './PortfolioItems'
import PortfolioPopup from './PortfolioPopup'
import { useState } from 'react'
import { StaticImageData } from 'next/image'

type PortfolioItem = {
  id: number
  heading: string
  img: StaticImageData | string
  alt: string
  text: string
}

export default function PortfolioBlock() {
	const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)


	return (
		<>
			<div className='flex  w-full h-full pt-15 text-white'>
				<div className='flex justify-center items-center flex-wrap w-full h-full max-w-6xl flex-1 mx-5 gap-10'>
					{PortfolioItems.map(({ id, heading, img, alt, text }) => (
						<button  onClick={() => setSelectedItem({id, heading, img, alt, text})} className='flex flex-col items-center cursor-pointer hover:brightness-75 transition-[filter] duration-300' key={id}>
							<h3 className='text-lg md:text-xl lg:text-2xl text-black font-bold pb-2'>{heading}</h3>
							<Image className='rounded-2xl w-70 border border-black/5 blur-[0.5px]' src={img} alt={alt} />
						</button>
					))}
				</div>
				{selectedItem && <PortfolioPopup item={selectedItem} onClose={() => setSelectedItem(null)}/>}
			</div>
		</>
	)
}

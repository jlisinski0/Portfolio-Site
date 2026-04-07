'use client'

import Image from 'next/image'
import { PortfolioItems } from '@/src/data'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'

export default function PortfolioBlock() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		})
	}, [])

	return (
		<>
			<div className='flex  w-full h-full pt-15 text-white'>
				<div className='flex justify-center items-center flex-wrap w-full h-full max-w-6xl flex-1 mx-5 gap-10'>
					{PortfolioItems.map(({ id, heading, img, alt, href }) => (
						<a href={href} className='flex flex-col items-center cursor-pointer group' data-aos='fade-up' key={id}>
							<h3 className='text-lg md:text-xl lg:text-2xl text-black font-bold pb-2'>{heading}</h3>
							<Image className='rounded-2xl w-70 border border-black/5  blur-[0.5px] transition-all duration-300 group-hover:brightness-75' src={img} alt={alt} width={200} height={200} />
						</a>
					))}
				</div>
			</div>
		</>
	)
}

'use client'

import Image from 'next/image'
import AboutText from './AboutText'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function AboutContent() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])

	return (
		<div className='flex flex-col items-start w-full h-full pt-20 max-w-6xl mx-auto px-10'>
			<div className='flex items-center'>
				<div className='relative border border-black h-15 w-15 lg:h-20 lg:w-20 rounded-full ' data-aos='fade-right'>
					<div className='absolute right-0.5 w-3 h-3 bg-green rounded-full animate-pulse'></div>
				</div>
				<h3 className='text-2xl font-medium font-cormorant pl-3 lg:text-4xl' data-aos='fade-down'>
					Jędrzej Lisiński
				</h3>
			</div>
			<AboutText />
		</div>
	)
}

'use client'

import PortfolioBlock from './PortfolioBlock'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Portfolio() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])

	return (
		<section className='min-h-dvh w-full bg-white'>
			<div className='flex flex-col justify-center w-full h-full max-w-6xl mx-auto py-20'>
				<div className='flex flex-col items-center'>
					<h2 className='text-3xl md:text-3xl lg:text-5xl font-bold' data-aos='fade-up'>
						Portfolio
					</h2>
					<p className='text-xs md:text-sm lg:text-base' data-aos='fade-up' data-aos-duration='1200'>
						My visions in practice.
					</p>
					<PortfolioBlock />
				</div>
			</div>
		</section>
	)
}

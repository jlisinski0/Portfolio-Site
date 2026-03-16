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
		<section className='min-h-dvh w-full bg-white border border-black/5' id='Portfolio'>
			<div className='divContainer'>
				<div className='flex flex-col items-center'>
					<h2 className='heading line' data-aos='fade-up'>
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

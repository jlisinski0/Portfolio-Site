'use client'

import TechnologyContent from './TechnologyContent.'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Technology() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])

	return (
		<section className='flex items-center justify-center  min-h-dvh w-full bg-accentOne   text-white 3xl:min-h-0' id='technology'>
			<div className='divContainer'>
				<div className='flex flex-col items-center'>
					<h2 className='heading' data-aos='fade-up'>
						Technology
					</h2>
					<p className='text-xs md:text-sm lg:text-base' data-aos='fade-up' data-aos-duration='1200'>
						That i use in my projects.
					</p>
				</div>
				<TechnologyContent />
			</div>
		</section>
	)
}

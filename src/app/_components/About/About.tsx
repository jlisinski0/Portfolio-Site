'use client'

import AboutContent from './AboutContent'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function About() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])

	return (
		<section className='h-[90dvh] w-full bg-white' id='About'>
			<div className='divContainer'>
				<div className='flex flex-col items-center w-full h-full'>
					<h2 className='heading line' data-aos='fade-up'>
						About
					</h2>
					<p className='text-xs md:text-sm lg:text-base' data-aos='fade-up' data-aos-duration='1200'>
						History of me.
					</p>
					<AboutContent />
				</div>
			</div>
		</section>
	)
}

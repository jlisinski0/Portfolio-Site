'use client'

import Image from 'next/image'
import FooterConent from './FooterContent'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Footer() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])

	return (
		<footer className='flex items-center justify-center min-h-[50dvh] bg-accentOne 3xl:min-h-0 text-white'>
			<div className='flex flex-col  max-w-6xl mx-auto px-10 py-20 md:flex-row'>
				<div className='pb-5 md:pr-10' data-aos='fade-right'>
					image
					<h4 className='text-3xl font-bold'>jlisinski.dev</h4>
				</div>
				<FooterConent />
			</div>
		</footer>
	)
}

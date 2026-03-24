'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function AboutText() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])

	return (
		<div className='text-[15px] pt-10 lg:text-[18px]' data-aos='fade-down'>
			<p className='pb-4'>Hi, I'm Jędrzej - an 18-year-old frontend developer who wrote his first HTML in Notepad during elementary school and never looked back.</p>
			<p className='pb-4'>For the past three years I've been building modern, fast and responsive websites using React and TypeScript.</p>
			<p className='pb-4'>
				Outside of client work I run my own{' '}
				<a className='text-accentOne hover:underline' href='https://www.raspberrypi.com/' rel='noopener noreferrer' target='_blank' title='Raspberry Pi' aria-label='Open Raspberry Pi site (new tab)'>
					Raspberry Pi
				</a>{' '}
				server with a private cloud and music streaming setup - because for me, this was never just a job.
			</p>
		</div>
	)
}

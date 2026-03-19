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
			<p className='pb-4'>Hi! My name is Jędrzej, I'm 18 years old, and I've been obsessed with computers ever since I was a kid.</p>
			<p className='pb-4'>In elementary school, during a computer science class, I created my first website in Notepad.</p>
			<p className='pb-4'>
				At that moment, I thought, <b>“Wow… this is it!”</b> And ever since then, I've known that this is exactly what I want to do.
			</p>
			<p className='pb-4'>
				Over the past three years, I have consistently expanded my knowledge—despite setbacks and moments of doubt. Today, I create <b>modern</b>, fast and attractive websites that actually work and{' '}
				<b>convert</b>.
			</p>
			<p className='pb-4'>
				In my spare time, I built my own server on{' '}
				<a className='text-accentOne hover:underline' href='https://www.raspberrypi.com/' rel='noopener noreferrer' target='_blank' title='Raspberry Pi' aria-label='Open Raspberry Pi site (new tab)'>
					Raspberry Pi
				</a>
				, where my own cloud and music server are hosted.
			</p>
			<p className='pb-4'>
				I often write Python programs purely out of passion - if you're curious, feel free to check out my{' '}
				<a className='text-accentOne hover:underline' href='https://github.com/jlisinski0' rel='noopener noreferrer' target='_blank' title='My github' aria-label='Open my github (new tab)'>
					Githuba
				</a>
				. If you're looking for someone to build a website for you with <b>pure passion</b> and without corporate pretentiousness- <b>You've hit the nail on the head</b>.
			</p>
		</div>
	)
}

'use client'

import Image from 'next/image'
import AboutText from './AboutText'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import jedrzejImg from '@/public/images/jedrzej.jpg'
import github from '@/public/icons/github.svg'
import mail from '@/public/icons/mail.svg'

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
					<Image className='absolute w-full h-full rounded-full object-cover scale-98' src={jedrzejImg} alt='photo of my self' />
					<div className='absolute right-0.5 w-3 h-3 bg-green rounded-full animate-pulse lg:right-1.5'></div>
				</div>

				<h3 className='text-2xl font-medium font-cormorant pl-3 lg:text-4xl pr-3' data-aos='fade-down'>
					Jędrzej Lisiński
				</h3>
				<div className='flex' data-aos='fade-left'>
					<a className='p-3 ' href='https://github.com/jlisinski0' rel='noopener noreferrer' target='_blank'>
						<Image src={github} alt='logo of github' width={30} height={30} />
					</a>
					<a className='p-3' href='mailto:jlisinski@proton.me'>
						<Image src={mail} alt='envolpe' width={30} height={30} />
					</a>
				</div>
			</div>
			<AboutText />
		</div>
	)
}

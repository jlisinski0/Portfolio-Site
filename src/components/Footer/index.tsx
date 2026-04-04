'use client'

import FooterConent from './FooterContent'
import Image from 'next/image'
import logo from '@/public/logo.png'

export default function Footer() {
	return (
		<footer className='flex items-center justify-center min-h-[50dvh] gradientTwo  text-white'>
			<div className='flex flex-col  max-w-6xl mx-auto px-10 py-20 md:flex-row'>
				<div className='flex flex-col items-center pb-5 md:pr-10'>
					<Image src={logo} alt='logo' width={100} className='pb-5' />
					<h4 className='text-3xl font-bold'>jlisinski.dev</h4>
				</div>
				<FooterConent />
			</div>
		</footer>
	)
}

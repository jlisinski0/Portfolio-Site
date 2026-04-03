'use client'

import { NavItems } from '@/src/data'
import NavMobile from './NavMobile'
import Link from 'next/link'
import icon from '@/public/logo.png'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function Nav() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (isVisible) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isVisible])

	useEffect(() => {
		AOS.init({
			duration: 200,
			once: true,
		})
	}, [])

	return (
		<>
			<nav className='fixed top-0 left-0 w-full h-17 pt-3 px-10 z-30' data-aos='fade-down'>
				<div className={`flex justify-between w-full h-full max-w-6xl mx-auto bg-white/90  border-black/10 rounded-2xl lg:px-8 ${isVisible ? 'border-none' : 'border'}`}>
					<div className='w-full h-full'>
						<Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href='/' className='flex items-center justify-center w-25 h-full cursor-pointer'>
							<Image src={icon} alt='icon' width={35} height={35} />
						</Link>
					</div>
					<ul className='hidden lg:flex lg:justify-end lg:items-center w-full h-full gap-10'>
						{NavItems.map(item => (
							<li className='cursor-pointer p-4 hover:opacity-80 transition-opacity duration-300 last:bg-accentOne last:text-white last:px-5 last:py-1.5 last:rounded-2xl ' key={item.id}>
								<Link href={item.href}>{item.name}</Link>
							</li>
						))}
					</ul>
					<button onClick={() => setIsVisible(prev => !prev)} aria-label={`${isVisible ? 'Close menu' : 'Open menu'}`} className='cursor-pointer p-4 h-full w-11 relative z-50 lg:hidden'>
						<div className='flex flex-col justify-center  w-full h-full relative'>
							<motion.span className='bg-black w-full h-0.5 block absolute left-0 top-1/2' style={{ originX: 0.5, originY: 0.5 }} animate={isVisible ? { rotate: 45, y: 0 } : { rotate: 0, y: -2 }} />
							<motion.span className='bg-black w-full h-0.5 block absolute left-0 top-1/2' style={{ originX: 0.5, originY: 0.5 }} animate={isVisible ? { rotate: -45, y: 0 } : { rotate: 0, y: 2 }} />
						</div>
					</button>
				</div>
			</nav>
			<AnimatePresence>{isVisible && <NavMobile state={setIsVisible} />}</AnimatePresence>
		</>
	)
}

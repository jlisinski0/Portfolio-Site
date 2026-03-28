'use client'

import { FooterHeading } from '@/src/data/index'
import { FooterItems } from '@/src/data/index'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function FooterConent() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])
	return (
		<>
			{FooterHeading.map(item => (
				<div key={item.id} className='flex flex-col items-center  py-5  md:px-10'>
					<h4 data-aos='fade-down' data-aos-delay='50' className='text-xl font-bold'>
						{item.heading}
					</h4>
					<ul className='flex flex-col items-center pt-2'>
						{FooterItems[item.key].map(footerItem => (
							<li data-aos='fade-up' data-aos-delay='150' className=' p-1 hover:text-white/80 transition-colors duration-300' key={footerItem.id}>
								<a className='block w-full' href={footerItem.href}>
									{footerItem.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	)
}

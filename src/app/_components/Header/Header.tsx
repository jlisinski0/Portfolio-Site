'use client'

import Button from '@/src/components/ui/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Header() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])

	return (
		<section className='h-[50dvh] w-ful gradient'>
			<div className='flex items-center justify-center h-full w-full'>
				<div className='flex flex-col justify-start items-center text-center w-full h-full px-5 pt-35' data-aos='fade-up'>
					<h1 className='text-3xl md:text-4xl lg:text-6xl'>Jędrzej Lisiński</h1>
					<div className='max-w-[17em] mt-2'>
						<p className='text-sm md:text-base'>A front-end developer with a head full of vision and a desire to grow.</p>
					</div>
					<div data-aos='fade-up' data-aos-duration='1200' className='flex gap-2 mt-5'>
						<Button href='#Projects'>Projects</Button>
						<Button>CV</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

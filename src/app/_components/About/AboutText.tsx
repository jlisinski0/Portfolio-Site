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
		<div className='text-[15px] pt-10' data-aos='fade-down'>
			<p className='lg:text-base'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam magnam praesentium esse et, deleniti minima commodi sint ipsum asperiores optio quas quod, dolorum aliquid nisi
				cupiditate totam reiciendis tenetur similique, corporis amet consequatur facere quo. Esse deserunt dolor, est numquam temporibus ipsum officiis dicta hic sapiente, non adipisci tenetur!
			</p>
		</div>
	)
}

'use client'

import Image from 'next/image'
import test from '@/public/images/jlisinskidev1.png'
import test2 from '@/public/images/jlisinskidev2.png'
import test3 from '@/public/images/jlisinskidev3.png'
import test4 from '@/public/images/jlisinskidev4.png'
import right from '@/public/icons/chevron-right.svg'
import left from '@/public/icons/chevron-left.svg'
import { useState } from 'react'
import { PortfolioItemSlug } from '@/src/types'
import { CasestudyImages } from '@/src/data'

type ImageSlideProps = {
	item: PortfolioItemSlug
}
export default function ImageSlider({ item }: ImageSlideProps) {
	const [current, setCurrent] = useState(0)

	const currentItems = CasestudyImages[item.slug] ?? []

	return (
		<div className='flex items-center justify-center gap-5 my-8 '>
			<button onClick={() => setCurrent(i => (i - 1 + currentItems.length) % currentItems.length)} className='inline cursor-pointer'>
				<Image src={left} alt='' aria-label='Show me previous image' />
			</button>
			<div>
				<Image className='rounded-2xl bg-accentTwo border border-black/5' src={currentItems[current].img} alt={currentItems[current].alt} width={250} height={250} />
			</div>
			<button onClick={() => setCurrent(i => (i + 1) % currentItems.length)} className='cursor-pointer'>
				<Image src={right} alt='' aria-label='Show me next image' />
			</button>
		</div>
	)
}

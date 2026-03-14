import { StaticImageData } from 'next/image'
import restaurant from '@/public/restaurant.png'

type PortfolioItem = {
	id: number
	heading: string
	href?: string
	slug: string
	img: StaticImageData | string
	alt: string
	description: string
}

export const PortfolioItems: PortfolioItem[] = [
	{
		id: 1,
		heading: 'Restauracja.pl',
		slug: 'restauracja',
		href: '/Casestudy/restauracja',
		img: restaurant,
		alt: 'Restauracja.pl',
		description: 'Case study of a restaurant website built with Next.js and Tailwind CSS for my portfolio. A front-end project without a backend, created for my portfolio.',
	},
	{
		id: 2,
		heading: 'test.pl',
		slug: 'test',
		href: '/Casestudy/test',
		img: restaurant,
		alt: 'test.pl',
		description: 'asd',
	},
]

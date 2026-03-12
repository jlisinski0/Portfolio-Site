import { StaticImageData } from 'next/image'
import restaurant from '@/public/restaurant.png'

type PortfolioItem = {
	id: number
	heading: string
	href?: string
	slug: string
	img: StaticImageData | string
	alt: string
}

export const PortfolioItems: PortfolioItem[] = [
	{
		id: 1,
		heading: 'Restauracja.pl',
		slug: 'restauracja',
		href: '/Casestudy/restauracja',
		img: restaurant,
		alt: 'Restauracja.pl',
	},
	{
		id: 2,
		heading: 'test.pl',
		slug: 'test',
		href: '/Casestudy/test',
		img: restaurant,
		alt: 'test.pl',
	},
]

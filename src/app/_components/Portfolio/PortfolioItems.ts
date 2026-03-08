import { StaticImageData } from 'next/image'
import restaurant from '@/public/restaurant.png'

type PortfolioItem = {
	id: number
	heading: string
	img: StaticImageData | string
}

export const PortfolioItems: PortfolioItem[] = [
	{
		id: 1,
		heading: 'Restauracja.pl',
		img: restaurant,
	},
	{
		id: 2,
		heading: 'Restauracja.pl',
		img: restaurant,
	},
]

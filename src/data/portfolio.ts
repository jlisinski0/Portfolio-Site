import { PortfolioItem } from '@/src/types/index'
import restaurant from '@/public/restaurant.png'

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
		heading: 'jlisinski.dev',
		slug: 'jlisinski',
		href: '/Casestudy/jlisinski',
		img: restaurant,
		alt: 'jlisinski.pl',
		description: 'asd',
	},
]

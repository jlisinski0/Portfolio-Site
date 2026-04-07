import { PortfolioItem } from '@/src/types/index'
import restaurant from '@/public/images/restauracja1.png'
import jlisinski from '@/public/images/jlisinskidev1.png'

export const PortfolioItems: PortfolioItem[] = [
	{
		id: 1,
		heading: 'restauracja.pl',
		slug: 'restauracja',
		href: '/casestudy/restauracja',
		img: restaurant,
		alt: 'Restauracja.pl',
		description: 'Case study of a restaurant website built with Next.js and Tailwind CSS for my portfolio. A front-end project without a backend, created for my portfolio.',
	},
	{
		id: 2,
		heading: 'jlisinski.dev',
		slug: 'jlisinski',
		href: '/casestudy/jlisinski',
		img: jlisinski,
		alt: 'jlisinski.pl',
		description: 'asd',
	},
]

import { StaticImageData } from 'next/image'
import restaurant from '@/public/restaurant.png'

type PortfolioItem = {
	id: number
	heading: string
	text: string
	img: StaticImageData | string
	alt: string
}

export const PortfolioItems: PortfolioItem[] = [
	{
		id: 1,
		heading: 'Restauracja.pl',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor nisl eget mattis sodales. Cras lobortis justo elit, sed pretium magna malesuada vel. Praesent eget ante at lorem ullamcorper malesuada. Maecenas venenatis dolor vel varius luctus. Integer nec nisi ultrices, posuere elit vel, laoreet enim. Curabitur laoreet lacinia est id commodo. Morbi ut ornare urna. Nam pharetra augue mauris. ',
		img: restaurant,
		alt: 'Restauracja.pl',
	},
	{
		id: 2,
		heading: 'Restauracja.pl',
		text: 'testestsetsesett',
		img: restaurant,
		alt: 'Restauracja.pl',
	},
]

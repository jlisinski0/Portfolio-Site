import { StaticImageData } from 'next/image'
import restaurant from '@/public/restaurant.png'
import { ReactNode } from 'react'
import github from '@/public/github.svg'

type PortfolioItem = {
	id: number
	heading: string
	text: ReactNode
	img: StaticImageData | string
	icon: StaticImageData | string
	alt: string
}

export const PortfolioItems: PortfolioItem[] = [
	{
		id: 1,
		heading: 'Restauracja.pl',
		text: (
			<>
				Cześć! <br />
				Kilka słów o projekcie:
				<br />
				To mój pierwszy projekt, w którym używam Reacta. Na stronie nie ma backendu, wiec nie da się nic zamówić. Pomysł na design i całą stronę wymyśliłem sam.
				<br />
				<br />
				<a className='text-sm text-white font-medium' href='https://restaurant-website-one-eta.vercel.app/' target='_blank' rel='noreferrer'>
					Wersja live strony
				</a>
			</>
		),
		img: restaurant,
		alt: 'Restauracja.pl',
		icon: github,
	},
	{
		id: 2,
		heading: 'Restauracja.pl',
		text: 'testestsetsesett',
		img: restaurant,
		alt: 'Restauracja.pl',
		icon: github,
	},
]

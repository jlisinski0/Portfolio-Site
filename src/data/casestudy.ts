import user from '@/public/icons/user.svg'
import clock from '@/public/icons/clock.svg'
import paperclip from '@/public/icons/paperclip.svg'
import suitcase from '@/public/icons/suitcase.svg'
import jlisinski1 from '@/public/images/jlisinskidev1.png'
import jlisinski2 from '@/public/images/jlisinskidev2.png'
import jlisinski3 from '@/public/images/jlisinskidev3.png'
import jlisinski4 from '@/public/images/jlisinskidev4.png'
import restauracja1 from '@/public/images/restauracja1.png'
import restauracja2 from '@/public/images/restauracja2.png'
import restauracja3 from '@/public/images/restauracja3.png'
import restauracja4 from '@/public/images/restauracja4.png'
import { CasestudyItem } from '@/src/types/index'
import { CasestudyImg } from '@/src/types/index'
import { CasestudyTexts } from '@/src/types/index'

export const CasestudyItems: Record<string, CasestudyItem[]> = {
	restauracja: [
		{
			id: 1,
			textLeft: 'Client',
			textRight: 'Me',
			img: user,
			alt: 'Person',
		},
		{
			id: 2,
			textLeft: 'Service',
			textRight: 'Website',
			img: paperclip,
			alt: 'Person',
		},
		{
			id: 3,
			textLeft: 'Lead time',
			textRight: '7 days',
			img: clock,
			alt: 'Person',
		},
		{
			id: 4,
			textLeft: 'Domain',
			textRight: 'restauracja.pl',
			img: suitcase,
			alt: 'Person',
			href: 'https://restaurant-website-one-eta.vercel.app/',
		},
	],

	jlisinski: [
		{
			id: 1,
			textLeft: 'Client',
			textRight: 'Jędrzej',
			img: user,
			alt: 'Person',
		},
		{
			id: 2,
			textLeft: 'Service',
			textRight: 'Landing',
			img: paperclip,
			alt: 'Paperclip',
		},
		{
			id: 3,
			textLeft: 'Lead time',
			textRight: '14 days',
			img: clock,
			alt: 'Clock',
		},
		{
			id: 4,
			textLeft: 'Domain',
			textRight: 'jlisinski.dev',
			img: suitcase,
			alt: 'Suitcase',
			href: 'https://jlisinski.dev',
		},
	],
}

export const CasestudyImages: Record<string, CasestudyImg[]> = {
	restauracja: [
		{
			id: 1,
			img: restauracja1,
			alt: 'restauracja1',
		},
		{
			id: 2,
			img: restauracja2,
			alt: 'restauracja2',
		},
		{
			id: 3,
			img: restauracja3,
			alt: 'restauracja3',
		},
		{
			id: 4,
			img: restauracja4,
			alt: 'restauracja4',
		},
	],

	jlisinski: [
		{
			id: 1,
			img: jlisinski1,
			alt: 'jlisinski1',
		},
		{
			id: 2,
			img: jlisinski2,
			alt: 'jlisinski2',
		},
		{
			id: 3,
			img: jlisinski3,
			alt: 'jlisinski3',
		},
		{
			id: 4,
			img: jlisinski4,
			alt: 'jlisinski4',
		},
	],
}


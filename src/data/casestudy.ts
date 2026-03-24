import user from '@/public/icons/user.svg'
import clock from '@/public/icons/clock.svg'
import paperclip from '@/public/icons/paperclip.svg'
import suitcase from '@/public/icons/suitcase.svg'
import { CasestudyItem } from '@/src/types/index'

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
			textRight: 'test',
			img: suitcase,
			alt: 'Person',
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
			textRight: '12 days',
			img: clock,
			alt: 'Clock',
		},
		{
			id: 4,
			textLeft: 'Domain',
			textRight: 'jlisinski.dev',
			img: suitcase,
			alt: 'Suitcase',
		},
	],
}

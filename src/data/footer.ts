import { DefaultItem } from '../types'
import { FooterItem } from '../types'

export const FooterHeading: FooterItem[] = [
	{
		id: 1,
		heading: 'Navigation',
		key: 'navigation',
	},
	{
		id: 2,
		heading: 'Other',
		key: 'other',
	},
]

export const FooterItems: Record<string, DefaultItem[]> = {
	navigation: [
		{
			id: 1,
			name: 'Projects',
			href: '#Projects',
		},
		{
			id: 2,
			name: 'About',
			href: '#About',
		},
		{
			id: 3,
			name: 'Technology',
			href: '#Technology',
		},
	],
	other: [
		{
			id: 1,
			name: 'Rules',
			href: '/Rules',
		},
		{
			id: 2,
			name: 'Privacy Policy ',
			href: 'Privacy-Policy ',
		},
		{
			id: 3,
			name: 'Contact',
			href: '/Contact',
		},
	],
}

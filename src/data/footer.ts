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
			href: '#projects',
		},
		{
			id: 2,
			name: 'About',
			href: '#about',
		},
		{
			id: 3,
			name: 'Technology',
			href: '#technology',
		},
	],
	other: [
		{
			id: 1,
			name: 'Privacy Policy ',
			href: '/privacy-policy ',
		},
		{
			id: 2,
			name: 'Contact',
			href: '/contact',
		},
	],
}

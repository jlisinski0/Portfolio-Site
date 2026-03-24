import { StaticImageData } from 'next/image'

export type PortfolioItem = {
	id: number
	heading: string
	href?: string
	slug: string
	img: StaticImageData | string
	alt: string
	description: string
}

export type TechnologyItem = {
	id: number
	heading: string
}

export type TechnologyBlocks = {
	id: number
	img: StaticImageData | string
	alt: string
}

export type PortfolioItemSlug = Pick<PortfolioItem, 'slug'>

export type CasestudyItem = {
	id: number
	textLeft: string
	textRight: string
	img: StaticImageData | string
	alt: string
}

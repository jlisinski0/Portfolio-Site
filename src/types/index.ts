import { StaticImageData } from 'next/image'

type ImageSrc = StaticImageData | string

export type DefaultItem = {
	id: number
	name: string
	href: string
}

export type PortfolioItem = {
	id: number
	heading: string
	href?: string
	slug: string
	img: ImageSrc
	alt: string
	description: string
}

export type TechnologyItem = {
	id: number
	heading: string
	key: string
}

export type FooterItem = {
	id: number
	heading: string
	key: string
}

export type TechnologyImgs = {
	id: number
	img: ImageSrc
	alt: string
}

export type PortfolioItemSlug = Pick<PortfolioItem, 'slug'>

export type CasestudyItem = {
	id: number
	textLeft: string
	textRight: string
	img: ImageSrc
	alt: string
}

export type CasestudyImg = Pick<CasestudyItem, 'id' | 'img' | 'alt'>

import { PortfolioItems } from '@/src/data'
import CasestudyInfo from './CasestudyInfo'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ImageSlider from './ImageSlider'
import { CasestudyContent } from '../data'

export async function generateStaticParams() {
	return PortfolioItems.map(item => ({
		slug: item.slug,
	}))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const { slug } = await params
	const item = PortfolioItems.find(i => i.slug === slug)

	if (!item) return { title: 'Jędrzej Lisiński - Not found' }

	return {
		title: `Jędrzej Lisiński - ${item.heading}`,
		description: `${item.description}`,

		alternates: {
			canonical: `https://jlisinski.dev${item.href}`,
		},

		robots: {
			index: true,
			follow: true,
		},

		openGraph: {
			type: 'website',
			title: `Jędrzej Lisiński - ${item.heading}`,
			description: `${item.description}`,
			url: `https://jlisinski.dev${item.href}`,
		},

		twitter: {
			card: 'summary_large_image',
			title: `Jędrzej Lisiński - ${item.heading}`,
			description: `${item.description}`,
		},
	}
}

export default async function Casestudy({ params }: { params: { slug: string } }) {
	const { slug } = await params
	const item = PortfolioItems.find(i => i.slug === slug)

	const Content = CasestudyContent[slug]

	if (!item) return notFound()

	return (
		<section className='min-h-dvh bg-white py-30 px-10'>
			<div className='flex gap-20 flex-col lg:flex-row items-start justify-center max-w-6xl mx-auto w-full h-full  lg:px-0'>
				<CasestudyInfo item={item} />
				<div className='lg:max-w-xl max-w-6xl px-10'>
					<h1 className='bg-linear-to-l from-black/1 to-accentOne bg-clip-text text-transparent  text-center text-2xl w-full h-full  sm:text-3xl uppercase font-bold pt-10 pb-5 lg:pt-0'>
						{item.heading}
					</h1>
					{Content ? <Content /> : <p>No content.</p>}
					<h4 className='bg-linear-to-r from-accentOne to-creamWhite bg-clip-text text-transparent  text-lg font-medium pt-3'>Showcase:</h4>
					<ImageSlider item={item} />
				</div>
			</div>
		</section>
	)
}

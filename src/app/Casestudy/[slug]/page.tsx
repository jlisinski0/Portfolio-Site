import { PortfolioItems } from '@/src/app/_components/Portfolio/PortfolioItems'
import CasestudyInfo from './CasestudyInfo'
import { Metadata } from 'next'

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

	if (!item) return <p>Nie znaleziono produktu</p>

	return (
		<section className='min-h-dvh bg-white pt-30 px-10'>
			<div className='flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto w-full h-full  lg:px-0'>
				<CasestudyInfo item={item} />
				<h1 className='text-center text-2xl w-full h-full sm:text-3xl uppercase font-bold pt-10 lg:pt-0'>{item.heading}</h1>
			</div>
		</section>
	)
}

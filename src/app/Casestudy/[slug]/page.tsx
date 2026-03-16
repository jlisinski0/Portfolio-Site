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
				<div className='lg:max-w-xl max-w-6xl px-10'>
					<h1 className='text-center text-2xl w-full h-full sm:text-3xl uppercase font-bold pt-10 pb-5 lg:pt-0'>{item.heading}</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam porro temporibus, vel qui, quod impedit ea molestias error molestiae provident iste. Cum cupiditate molestiae saepe
						corrupti! Vel corporis laborum nulla optio fugit est dolorem enim ipsum eveniet possimus mollitia eligendi inventore, dicta deserunt autem, nam aliquam repellat iusto alias blanditiis
						consectetur hic. Vitae laborum reiciendis distinctio repellat officia, praesentium aut rem est ipsam aperiam dolor dicta, corporis omnis voluptatibus soluta? Cumque ducimus maiores
						doloremque odit, sit libero illum consequatur ab temporibus eos eius? Sint accusantium qui dolore accusamus tempora dolorum ea deleniti! Odit modi voluptas architecto voluptatem accusamus.
						Fuga, recusandae?
					</p>
				</div>
			</div>
		</section>
	)
}

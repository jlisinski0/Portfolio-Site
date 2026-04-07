import Image from 'next/image'
import { CasestudyItems } from '@/src/data'
import { PortfolioItemSlug } from '@/src/types'

type CasestudyInfoProps = {
	item: PortfolioItemSlug
}

export default function CasestudyItem({ item }: CasestudyInfoProps) {
	const currentItems = CasestudyItems[item.slug] ?? []

	return (
		<>
			{currentItems.length === 0 ? (
				<p className='text-center'>Error there's no item</p>
			) : (
				currentItems.map(casestudyItem => (
					<div key={casestudyItem.id}>
						<div className='flex justify-between w-full'>
							<div className='flex gap-3'>
								<Image className='w-7' src={casestudyItem.img} alt={casestudyItem.alt} />
								<p>{casestudyItem.textLeft}</p>
							</div>
							<p>
								{casestudyItem.href ? (
									<a href={casestudyItem.href} target='_blank' rel='noopener noreferrer' className=' hover:text-accentOne transition-colors duration-300'>
										{casestudyItem.textRight}
									</a>
								) : (
									casestudyItem.textRight
								)}
							</p>
						</div>
						<div className='w-full bg-black/20 h-px my-2'></div>
					</div>
				))
			)}
		</>
	)
}

import Image from 'next/image'
import { CasestudyItems } from './CasestudyItems'

type PortfolioItem = {
	slug: string
}

interface CasestudyInfoProps {
	item: PortfolioItem
}

export default function CasestudyItem({ item }: CasestudyInfoProps) {
	const currentItems = CasestudyItems[item.slug] ?? []

	return (
		<>
			{currentItems.length === 0 ? (
				<p className='text-center'>Error there's no item</p>
			) : (
				currentItems.map(item => (
					<div key={item.id}>
						<div className='flex justify-between w-full'>
							<div className='flex  gap-3'>
								<Image className='w-7' src={item.img} alt={item.alt} />
								<p>{item.textLeft}</p>
							</div>
							<p>{item.textRight}</p>
						</div>
						<div className='w-full bg-black/20 h-px my-2'></div>
					</div>
				))
			)}
		</>
	)
}

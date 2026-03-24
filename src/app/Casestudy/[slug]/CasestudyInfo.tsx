import CasestudyRow from './Casestudyrow'
import { PortfolioItemSlug } from '@/src/types'

type CasestudyInfoProps = {
	item: PortfolioItemSlug
}

export default function CasestudyInfo({ item }: CasestudyInfoProps) {
	return (
		<div className='flex flex-col justify-center w-full lg:w-100 h-125'>
			<h3 className='font-medium text-xl pb-10'>Information about project</h3>
			<CasestudyRow item={item} />
		</div>
	)
}

import CasestudyRow from './Casestudyrow'

type PortfolioItem = {
	slug: string
}

interface CasestudyInfoProps {
	item: PortfolioItem
}

export default function CasestudyInfo({ item }: CasestudyInfoProps) {
	return (
		<div className='flex flex-col justify-center w-full lg:w-100 h-125'>
			<h3 className='font-medium text-xl pb-10'>Informaction about project</h3>
			<CasestudyRow item={item} />
		</div>
	)
}

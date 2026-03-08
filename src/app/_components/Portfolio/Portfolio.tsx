import PortfolioBlock from './PortfolioBlock'

export default function Portfolio() {
	return (
		<section className='min-h-dvh w-full bg-white'>
			<div className='flex flex-col justify-center w-full h-full max-w-6xl mx-auto py-20'>
				<div className='flex flex-col items-center'>
					<h2 className='text-3xl md:text-3xl lg:text-5xl font-bold'>Portfolio</h2>
					<p className='text-xs md:text-sm lg:text-base'>My visions in practice.</p>
					<PortfolioBlock />
				</div>
			</div>
		</section>
	)
}

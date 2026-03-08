import Image from 'next/image'
import { PortfolioItems } from './PortfolioItems'

export default function PortfolioBlock() {
	return (
		<div className='flex  w-full h-full pt-15 text-white'>
			<div className='flex justify-center items-center flex-wrap w-full h-full max-w-6xl flex-1 mx-5 gap-10'>
				{PortfolioItems.map(({ id, heading, img }) => (
					<div className='flex flex-col items-center cursor-pointer hover:brightness-75 transition-[filter] duration-300' key={id}>
						<h3 className='text-lg md:text-xl lg:text-2xl text-black font-bold pb-2'>{heading}</h3>
						<Image className='rounded-2xl w-70 border border-black/5 blur-[0.5px]' src={img} alt='Website ' />
					</div>
				))}
			</div>
		</div>
	)
}

import { PortfolioItems } from './PortfolioItems'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import close from '@/public/x.svg'

type PortfolioItem = {
	id: number
	heading: string
	img: StaticImageData | string
	alt: string
	text: string
}

export default function PortfolioPopup({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
	return (
		<>
			<div className='fixed inset-0 backdrop-blur-sm bg-black/20  z-40 p-10' onClick={onClose}></div>
			<div className='fixed inset-10 top-25 rounded-2xl  bg-black/60 backdrop-blur-xl  overflow-y-auto z-50 max-w-6xl mx-auto'>
				<div className='flex justify-center pt-40 w-full h-full'>
					<div className='flex flex-col items-center justify-center px-10'>
						<button className='fixed top-0 right-0 p-3 cursor-pointer' onClick={onClose}>
							<Image src={close} alt='x' aria-label='close popup' />
						</button>
						<h4 className='text-2xl uppercase font-bold pb-5'>{item.heading}</h4>
						<div className='pb-10 '>
							<p>{item.text}</p>
						</div>
						<Image className='w-70' src={item.img} alt='x' />
					</div>
				</div>
			</div>
		</>
	)
}

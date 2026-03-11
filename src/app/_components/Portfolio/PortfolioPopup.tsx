import { PortfolioItems } from './PortfolioItems'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import close from '@/public/x.svg'
import { ReactNode } from 'react'

type PortfolioItem = {
	id: number
	heading: string
	img: StaticImageData | string
	alt: string
	icon: StaticImageData | string
	text: ReactNode
}

export default function PortfolioPopup({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
	return (
		<>
			<div className='fixed inset-0 backdrop-blur-sm bg-black/20  z-40 p-10' onClick={onClose}></div>
			<div className='fixed inset-10 top-25 rounded-2xl  bg-black/60 backdrop-blur-xl  overflow-y-auto z-50  max-w-6xl mx-auto'>
				<div className='flex justify-center pt-40 w-full h-full max-w-3xl mx-auto'>
					<div className='flex flex-col items-center justify-center px-10'>
						<button className='fixed top-0 right-0 p-3 cursor-pointer' onClick={onClose}>
							<Image src={close} alt='x' aria-label='close popup' />
						</button>
						<h4 className='text-2xl uppercase font-bold pt-20 md:pt-0 pb-5'>{item.heading}</h4>
						<div className='pb-10 text-md'>
							<p>{item.text}</p>
							<a href='https://github.com/jlisinski0/Restaurant-Website' target='_blank' rel='noreferrer'>
								<Image src={item.icon} alt='test' />
							</a>
						</div>

						<Image className='w-70' src={item.img} alt='x' />
					</div>
				</div>
			</div>
		</>
	)
}

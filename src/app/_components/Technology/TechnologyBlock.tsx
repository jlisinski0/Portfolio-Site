import { TechnologyItems } from '@/src/data/index'
import { TechnologyImg } from '@/src/data/index'
import Image from 'next/image'

export default function TechnologyBlock() {
	return (
		<div className='flex flex-col gap-10'>
			{TechnologyItems.map(item => (
				<div className='flex flex-col' key={item.id}>
					<h3 className='text-base font-medium md:text-xl'>{item.heading}</h3>
					<div className='flex flex-wrap justify-center lg:justify-start gap-4 pt-8'>
						{TechnologyImg[item.key].map(img => (
							<div className='flex items-center justify-center w-25 h-25 rounded-2xl bg-accentTwo/100 hover:scale-115 transition-[scale]' key={img.id}>
								<Image className='opacity-85 ' src={img.img} alt={img.alt} width={50} height={50} />
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

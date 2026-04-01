'use client'

import { FooterHeading } from '@/src/data/index'
import { FooterItems } from '@/src/data/index'

export default function FooterConent() {
	return (
		<>
			{FooterHeading.map(item => (
				<div key={item.id} className='flex flex-col items-center  py-5  md:px-10'>
					<h4 className='text-xl font-bold'>{item.heading}</h4>
					<ul className='flex flex-col items-center pt-2'>
						{FooterItems[item.key].map(footerItem => (
							<li className=' p-1 hover:text-white/80 transition-colors duration-300' key={footerItem.id}>
								<a className='block w-full' href={footerItem.href}>
									{footerItem.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	)
}

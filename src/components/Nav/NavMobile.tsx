import { NavItems } from '@/src/data'
import Link from 'next/link'
import { motion } from 'motion/react'

export default function NavMobile({ state }: { state: (val: boolean) => void }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.2 }}
			className='h-dvh fixed top-0 left-0 w-full bg-white z-20 lg:hidden'>
			<div className='flex items-start  h-full w-full'>
				<ul className='flex flex-col text-center w-full pt-30 text-2xl'>
					{NavItems.map(item => (
						<li className='cursor-pointer w-full h-full  hover:text-accentOne duration-300 transition-colors' key={item.id}>
							<Link onClick={() => state(false)} className='block p-5 w-full' href={item.href}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	)
}

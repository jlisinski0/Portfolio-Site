'use client'

import FooterConent from './FooterContent'

export default function Footer() {
	return (
		<footer className='flex items-center justify-center min-h-[50dvh] gradientTwo 3xl:min-h-0 text-white'>
			<div className='flex flex-col  max-w-6xl mx-auto px-10 py-20 md:flex-row'>
				<div className='pb-5 md:pr-10'>
					image
					<h4 className='text-3xl font-bold'>jlisinski.dev</h4>
				</div>
				<FooterConent />
			</div>
		</footer>
	)
}

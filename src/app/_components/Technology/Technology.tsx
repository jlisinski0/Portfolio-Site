import Section from '@/src/components/ui/Section'
import TechnologyContent from './TechnologyContent.'

export default function Technology() {
	return (
		<section className='min-h-dvh w-full bg-accentOne border border-black/5 text-white' id='Technology'>
			<div className='divContainer'>
				<div className='flex flex-col items-center'>
					<h2 className='heading '>Technology</h2>
					<p className='text-xs md:text-sm lg:text-base' data-aos='fade-up' data-aos-duration='1200'>
						That i use in my projects.
					</p>
				</div>
				<TechnologyContent />
			</div>
		</section>
	)
}

import Button from '@/src/components/ui/Button'

export default function Header() {
	return (
		<section className='h-[50dvh] w-ful gradient'>
			<div className='flex items-center justify-center h-full w-full'>
				<div className='flex flex-col justify-start items-center text-center w-full h-full px-5 pt-35'>
					<h1 className='text-3xl md:text-4xl lg:text-6xl'>Jędrzej Lisiński</h1>
					<div className='max-w-[17em] mt-2'>
						<p className='text-sm md:text-base'>A front-end developer with a head full of vision and a desire to grow.</p>
					</div>
					<Button>Portfolio</Button>
					<div></div>
				</div>
			</div>
		</section>
	)
}

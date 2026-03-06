export default function Header() {
	return (
		<section className='h-dvh w-ful gradient'>
			<div className='flex items-center justify-center h-full w-full'>
				<div className='flex flex-col justify-center items-center text-center w-full h-full px-5'>
					<h1 className='text-3xl md:text-4xl lg:text-6xl'>Jędrzej Lisiński</h1>
					<div className='max-w-[14em] mt-2'>
						<p className='text-sm md:text-base'>Front-end developer z głową pełną wizjii i chęcią rozwoju.</p>
					</div>
					<button className='cursor-pointer bg-black text-white rounded-2xl px-4 py-2 mt-5 hover:bg-black/80 transition-colors duration-300'>Portfolio</button>
				</div>
			</div>
		</section>
	)
}

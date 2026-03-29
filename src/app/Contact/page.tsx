import ContactForm from './ContactForm'

export default function Contact() {
	return (
		<div className='min-h-dvh w-full bg-white  pt-15'>
			<div className='divContainer'>
				<h1 className='heading'>
					<span className='text-6xl'>C</span>ontact
				</h1>
				<p className='text-xs md:text-sm lg:text-base'>Let's build something together</p>
				<ContactForm />
			</div>
		</div>
	)
}

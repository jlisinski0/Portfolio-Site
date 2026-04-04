import ContactForm from './ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Jędrzej Lisiński - Contact',
	description: `Contact Jędrzej Lisiński - feel free to reach out for collaborations, questions.`,

	alternates: {
		canonical: 'https://jlisinski.dev/contact',
	},

	robots: {
		index: true,
		follow: true,
	},

	openGraph: {
		type: 'website',
		title: 'Jędrzej Lisiński - Contact',
		description: `Contact Jędrzej Lisiński - feel free to reach out for collaborations, questions.`,
		url: 'https://jlisinski.dev/contact',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Jędrzej Lisiński - Contact',
		description: `Contact Jędrzej Lisiński - feel free to reach out for collaborations, questions.`,
	},
}

export default function Contact() {
	return (
		<div className='min-h-dvh w-full bg-white  pt-15 3xl:min-h-0'>
			<div className='divContainer'>
				<h1 className='heading'>Contact</h1>
				<p className='text-xs md:text-sm lg:text-base'>Let's build something together</p>
				<ContactForm />
			</div>
		</div>
	)
}

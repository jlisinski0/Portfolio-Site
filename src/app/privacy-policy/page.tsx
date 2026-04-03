import { Metadata } from 'next'
import PrivacyPolicyItems from './PrivacyPolicyItems'


export const metadata: Metadata = {
	title: 'Jędrzej Lisiński - Contact',
	description: `Contact Jędrzej Lisiński - feel free to reach out for collaborations, questions.`,

	alternates: {
		canonical: 'https://jlisinski.dev/privacy-policy',
	},

	robots: {
		index: true,
		follow: true,
	},

	openGraph: {
		type: 'website',
		title: 'Jędrzej Lisiński - Contact',
		description: `Contact Jędrzej Lisiński - feel free to reach out for collaborations, questions.`,
		url: 'https://jlisinski.dev/privacy-policy',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Jędrzej Lisiński - Contact',
		description: `Contact Jędrzej Lisiński - feel free to reach out for collaborations, questions.`,
	},
}

export default function Contact() {
	return (
		<div className='min-h-dvh w-full bg-white  pt-15'>
			<div className='divContainer'>
				<h1 className='heading'>Privacy Policy</h1>
				<PrivacyPolicyItems />
				
			</div>
		</div>
	)
}

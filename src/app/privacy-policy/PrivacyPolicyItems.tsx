export default function PrivacyPolicyItems() {
	return (
		<div className='flex flex-col gap-8 px-8'>
			<div className='pt-5'>
				<h2 className='text-xl  lg:text-2xl text-center pb-5'>Effective date: April 03, 2026</h2>
				<p className='text-base '>
					This Privacy Policy describes how we collect, use, and protect your personal data when you use the website{' '}
					<a className='text-accentOne' href='https://jlisinski.dev' target='_blank' rel='noopener noreferrer'>
						https://jlisinski.dev
					</a>{' '}
					(hereinafter referred to as the “Website” or “Service”), in particular through the contact form.
				</p>
			</div>
			<div>
				<h3 className='font-bold text-lg pb-2 '>1. Data Controller</h3>
				<p>The administrator (Data Controller) of your personal data is:</p>
				<ul className='py-2 pl-8 list-disc'>
					<li>Jędrzej Lisiński</li>
					<li>Książki ul. Toruńska 6 87-222</li>
					<li>jlisinski@proton.me</li>
				</ul>
			</div>
			<div>
				<h3 className='font-bold text-lg pb-2'>2. Personal Data We Collect</h3>
				<p>When you use the contact form on the Website, we collect the following personal data:</p>
				<ul className='py-2 pl-8 list-disc'>
					<li>First name and last name</li>
					<li>Email address</li>
					<li>Message content</li>
					<li>Date and time the message was sent</li>
				</ul>
				<p>Additionally, the Website automatically collects technical data such as:</p>
				<ul className='py-2 pl-8 list-disc'>
					<li>IP address</li>
					<li>Browser type and version</li>
					<li>Operating system</li>
					<li>Device information</li>
					<li>Referring URL (if applicable)</li>
				</ul>
			</div>
			<div>
				<h3 className='font-bold text-lg pb-2'>3. Purposes and Legal Basis for Processing</h3>
				<p>We process your personal data for the following purposes:</p>
				<ul className='py-2 pl-8 list-disc'>
					<li>
						To respond to your inquiry or message sent via the contact form (legal basis: Art. 6(1)(b) GDPR - taking steps at the request of the data subject prior to entering into a contract, or Art.
						6(1)(f) GDPR - legitimate interest of the controller).
					</li>
				</ul>
				<p>We do not use the data for marketing purposes or send newsletters unless you explicitly consent to it.</p>
			</div>
			<div>
				<h3 className='font-bold text-lg pb-2'>4. Data Retention Period</h3>
				<p>
					our personal data from the contact form will be stored for a maximum period of 12 months from the date of the last contact, unless a longer retention period is required by law (e.g. in case
					of potential legal claims).
				</p>
			</div>
			<div>
				<h3 className='font-bold text-lg pb-2'>5. Recipients of Personal Data</h3>
				<p>Your data may be shared only with trusted service providers who help us operate the Website:</p>
				<ul className='py-2 pl-8 list-disc'>
					<li>Vercel (website hosting and deployment)</li>
					<li>Google (Google Fonts and Google Analytics)</li>
				</ul>
				<p>
					We do not transfer your personal data to any third countries outside the European Economic Area, except for services that apply appropriate safeguards (Standard Contractual Clauses or
					adequacy decisions).
				</p>
			</div>
			<div>
				<h3 className='font-bold text-lg pb-2'>6. Your Rights</h3>
				<p>Under the GDPR you have the following rights:</p>
				<ul className='py-2 pl-8 list-disc'>
					<li>Right of access to your personal data</li>
					<li>Right to rectification</li>
					<li>Right to erasure (“right to be forgotten”)</li>
					<li>Right to restriction of processing</li>
					<li>Right to object to processing</li>
					<li>Right to data portability</li>
					<li>Right to withdraw consent (where processing is based on consent)</li>
					<li>Right to lodge a complaint with the supervisory authority (President of the Personal Data Protection Office - UODO in Poland)</li>
				</ul>
				<p>To exercise any of the above rights, please contact us at: jlisinski@proton.me</p>
			</div>
			<div>
				<h3 className='font-bold text-lg pb-2'>7. Cookies and Tracking Technologies</h3>
				<p>The Website uses:</p>
				<ul className='py-2 pl-8 list-disc'>
					<li>
						<strong>Essential cookies</strong> necessary for the proper functioning of the site.
					</li>
					<li>
						<strong>Google Fonts</strong> - to display fonts.
					</li>
					<li>
						<strong>Google Analytics</strong> to analyze website traffic and user behavior (anonymized data).
					</li>
				</ul>
				<p>You can manage your cookie preferences through your browser settings. For more information about cookies, please refer to our [Cookie Policy] (if you create one) or browser help pages.</p>
			</div>
			<div>
				<h3 className='font-bold text-lg pb-2'>8. Data Security</h3>
				<p>We apply appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
			</div>
			<div>
				<h3 className='font-bold text-lg pb-2'>9. Changes to This Privacy Policy</h3>
				<p>We may update this Privacy Policy from time to time. The current version is always available on the Website. The date of the last update is indicated at the top of this document.</p>
			</div>
			<div>
				<h3 className='font-bold text-lg pb-2'>10. Contact</h3>
				<p>If you have any questions regarding this Privacy Policy or the processing of your personal data, please contact us at: jlisinski@proton.me</p>
			</div>
		</div>
	)
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/src/components/Nav'
import './globals.css'

const inter = Inter({
	subsets: ['latin', 'latin-ext'],
})

export const metadata: Metadata = {
	title: 'Jędrzej Lisiński - Frontend Developer',
	description: 'Frontend developer specjalizujący sie w React i Next.js. Sprawdź moje projekty i jeśli ci będziesz zainteresowany, zachęcam do kontaktu',

	alternates: {
		canonical: 'https://jlisinski.dev/',
	},

	openGraph: {
		title: 'Jędrzej Lisiński - Frontend Developer',
		description: 'Frontend developer specjalizujący sie w React i Next.js. Sprawdź moje projekty i jeśli ci będziesz zainteresowany, zachęcam do kontaktu',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Jędrzej Lisiński - Frontend Developer',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl'>
			<body className={`${inter.className} antialiased`}>
				<Nav/>
				{children}
				</body>
		</html>
	)
}


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Cormorant } from 'next/font/google'
import Nav from '@/src/components/Nav'
import './globals.css'

const inter = Inter({
	subsets: ['latin', 'latin-ext'],
})

const cormorant = Cormorant({
	subsets: ['latin', 'latin-ext'],
	variable: '--font-cormorant',
})

export const metadata: Metadata = {
	title: 'Jędrzej Lisiński - Frontend Developer',
	description: `Frontend developer specializing in React and Next.js. Check out my projects, and if you're interested, feel free to reach out`,

	alternates: {
		canonical: 'https://jlisinski.dev/',
	},

	robots: {
		index: true,
		follow: true,
	},

	openGraph: {
		type: 'website',
		title: 'Jędrzej Lisiński - Frontend Developer',
		description: `Frontend developer specializing in React and Next.js. Check out my projects, and if you're interested, feel free to reach out`,
		url: 'https://jlisinski.dev/',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Jędrzej Lisiński - Frontend Developer',
		description: `Frontend developer specializing in React and Next.js. Check out my projects, and if you're interested, feel free to reach out`,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} ${cormorant.variable} antialiased`}>
				<Nav />
				{children}
			</body>
		</html>
	)
}

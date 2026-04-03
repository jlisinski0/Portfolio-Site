import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Cormorant } from 'next/font/google'
import { Libre_Caslon_Display } from 'next/font/google'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import './globals.css'

const inter = Inter({
	subsets: ['latin', 'latin-ext'],
})

const cormorant = Cormorant({
	subsets: ['latin', 'latin-ext'],
	variable: '--font-cormorant',
})

const librecaslon = Libre_Caslon_Display({
	weight: '400',
	subsets: ['latin', 'latin-ext'],
	variable: '--font-librecaslon',
	display: 'swap',
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

	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
		other: [
			{
				rel: 'android-chrome-192x192',
				url: '/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				rel: 'android-chrome-512x512',
				url: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	},

	manifest: '/site.webmanifest',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} ${cormorant.variable} ${librecaslon.variable}  antialiased`}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	)
}

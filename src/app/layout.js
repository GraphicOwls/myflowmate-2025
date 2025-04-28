/** @format */

import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono, Inter, Mr_Dafoe } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Script from 'next/script'
import Footer from '@/components/Footer'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

const dafoe = Mr_Dafoe({
	variable: '--font-mr-dafoe',
	subsets: ['latin'],
	weight: '400',
})

export const metadata = {
	title: 'MyFlowMate – Expert Webflow & Jetboost Support',
	description:
		'Get personalized support from a Webflow & Jetboost expert to help you launch your websites faster and more efficiently. Better understand how to use Webflow and Jetboost and all the nuances of the platforms.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${dafoe.variable} antialiased`}
			>
				<Header />
				{children}
				<Footer />

				<Script id='savvycal-init'>
					{`
            window.SavvyCal = window.SavvyCal || function() {
              (SavvyCal.q = SavvyCal.q || []).push(arguments);
            };
          `}
				</Script>
				<Script
					src='https://embed.savvycal.com/v1/embed.js'
					strategy='afterInteractive'
				/>
				<Script id='savvycal-load'>
					{`
            if (window.SavvyCal) {
              window.SavvyCal('init');
            }
          `}
				</Script>
				<Analytics />
			</body>
		</html>
	)
}

/** @format */

import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import CTA from '@/components/CTA'

export default function Home() {
	return (
		<main className=''>
			<Hero />
			<Features />
			<Pricing />
			<Faq />
			<CTA />
		</main>
	)
}

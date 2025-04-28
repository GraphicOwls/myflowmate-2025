/** @format */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SquarePoint } from '@/components/SquarePoint'
import Container from '@/components/Container'

const navLinks = [
	{ label: 'Your Flowmate', href: '/your-flowmate' },
	{
		label: 'Contact',
		href: 'mailto:noahgraskin@gmail.com?subject=MyFlowMate | Message',
	},
	{ label: 'Terms of Service', href: '/terms-of-service' },
]

export default function Footer() {
	return (
		<section className='border-stone-400 border-dashed border-b overflow-hidden'>
			<Container className='flex items-center justify-between px-6 py-6 border-b-0'>
				<div className='flex items-center space-x-4'>
					<Link href='/'>
						<Image
							src='/myflowmate.svg'
							alt='MyFlowMate Logo'
							width={160}
							height={60}
						/>
					</Link>
					<div className='text-stone-500'>
						©{new Date().getFullYear()} MyFlowMate
					</div>
				</div>
				<ul className='flex items-center justify-end space-x-6'>
					{navLinks.map((link) => (
						<li key={link.label}>
							<Link
								className='font-medium opacity-60 duration-150 hover:opacity-100 transition-opacity'
								href={link.href}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
				<SquarePoint position='bottomLeft' />
				<SquarePoint position='bottomRight' />
			</Container>
		</section>
	)
}

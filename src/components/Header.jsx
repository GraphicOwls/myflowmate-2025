/** @format */

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SquarePoint } from '@/components/SquarePoint'
import Container from '@/components/Container'

const navLinks = [{ label: 'Your Flowmate', href: '/your-flowmate' }]

export default function Header() {
	return (
		<nav className='border-stone-400 border-dashed border-b border-t'>
			<Container className='flex items-center justify-between px-6 py-6 border-b-0'>
				<Link href='/'>
					<Image
						src='/myflowmate.svg'
						alt='MyFlowMate Logo'
						width={160}
						height={60}
					/>
				</Link>
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
					<li>
						<Link href='#book-session'>
							<Button>Get Started</Button>
						</Link>
					</li>
				</ul>
				<SquarePoint position='topLeft' />
				<SquarePoint position='topRight' />
				<SquarePoint position='bottomLeft' />
				<SquarePoint position='bottomRight' />
			</Container>
		</nav>
	)
}

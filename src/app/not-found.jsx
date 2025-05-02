/** @format */

import { Button } from '@/components/ui/button'
import Container from '@/components/Container'
import { SquarePoint } from '@/components/SquarePoint'
import Link from 'next/link'

export default function NotFound() {
	return (
		<section className='border-stone-400 border-dashed border-b'>
			<Container className='max-w-[1608px] mx-auto text-center grid place-items-center gap-4 min-h-[85dvh] border-l border-stone-400 border-dashed border-r relative'>
				<div className='flex flex-col items-center justify-center gap-4'>
					<h1 className='text-4xl font-bold'>Page Not Found</h1>
					<p className='text-xl text-stone-600 max-w-xl leading-relaxed'>
						Sorry, but it looks like that page doesn't exist. Please check the
						URL or return to the homepage.
					</p>
					<Link href='/'>
						<Button size='lg'>Return Home</Button>
					</Link>
				</div>
				<SquarePoint position='bottomLeft' />
				<SquarePoint position='bottomRight' />
			</Container>
		</section>
	)
}

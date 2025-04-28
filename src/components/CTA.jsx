/** @format */

import { Button } from '@/components/ui/button'
import { SquarePoint } from '@/components/SquarePoint'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/Container'

export default function CTA() {
	return (
		<section className='border-stone-400 border-dashed border-b relative'>
			<Container className='max-w-[1608px] mx-auto text-center grid place-items-center gap-4 py-28 border-l border-stone-400 border-dashed border-r relative bg-accent z-10'>
				<h3 className='text-4xl font-bold'>Book Your Session Today!</h3>
				<p className='text-xl text-stone-600 max-w-2xl leading-relaxed'>
					Learn how to build faster and how to be more efficient in Webflow with
					direct 1 on 1 mentorship from your Webflow expert.
				</p>
				<div className='flex items-center justify-center gap-6 my-4 text-3xl font-cursive font-normal'>
					<Image
						src='/avatar.png'
						alt='Noah Raskin'
						width={60}
						height={60}
						className='rounded-full'
					/>
					Noah Raskin
				</div>
				<Link href='#book-session'>
					<Button size='lg'>Book Session</Button>
				</Link>
				<SquarePoint position='bottomLeft' />
				<SquarePoint position='bottomRight' />
				<svg
					className='absolute -z-[1] inset-0 w-full h-full'
					xmlns='http://www.w3.org/2000/svg'
					preserveAspectRatio='none'
				>
					<defs>
						<pattern
							id='diagonalPattern'
							width='5'
							height='5'
							patternUnits='userSpaceOnUse'
							patternTransform='rotate(-45)'
						>
							<line
								x1='0'
								y1='0'
								x2='0'
								y2='5'
								stroke='#a8a29e70'
								strokeWidth='0.5'
							/>
						</pattern>
					</defs>
					<rect
						x='0'
						y='0'
						width='100%'
						height='100%'
						fill='url(#diagonalPattern)'
					/>
				</svg>
			</Container>
		</section>
	)
}

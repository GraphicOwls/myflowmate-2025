/** @format */

import { Button } from '@/components/ui/button'
import { SquarePoint } from '@/components/SquarePoint'
import Link from 'next/link'
import Container from '@/components/Container'

export default function Hero() {
	return (
		<section className='border-stone-400 border-dashed border-b'>
			<Container className='max-w-[1608px] mx-auto text-center grid place-items-center gap-4 py-28 border-l border-stone-400 border-dashed border-r relative'>
				<h1 className='text-4xl font-bold'>Webflow Expert Support</h1>
				<p className='text-xl text-stone-600 max-w-2xl leading-relaxed'>
					Get 1 on 1 training & mentorship with a webflow expert. Want to learn
					Webflow faster? Need help with interactions? Not a problem!
				</p>
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

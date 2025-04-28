/** @format */

import Container from '@/components/Container'
import { SquarePoint } from '@/components/SquarePoint'

export default function SectionHeader({ title, subtitle, children }) {
	return (
		<div className='border-b border-stone-400 border-dashed'>
			<Container>
				<div className='max-w-[1608px] mx-auto text-center grid place-items-center gap-4 pt-28 pb-12 relative'>
					<h1 className='text-3xl font-bold'>{title}</h1>
					<p className='text-xl text-stone-600 max-w-2xl leading-relaxed'>
						{subtitle}
					</p>
					{children && <div>{children}</div>}
					<SquarePoint position='bottomLeft' />
					<SquarePoint position='bottomRight' />
				</div>
			</Container>
		</div>
	)
}

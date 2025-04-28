/** @format */

import React from 'react'
import { twMerge } from 'tailwind-merge'
import { SquarePoint } from '@/components/SquarePoint'

export default function Container({ children, className }) {
	return (
		<div
			className={twMerge(
				'max-w-[1608px] mx-auto border-l border-stone-400 border-dashed border-r relative',
				className,
			)}
		>
			{children}
			<SquarePoint position='bottomLeft' />
			<SquarePoint position='bottomRight' />
		</div>
	)
}

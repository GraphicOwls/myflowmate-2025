/** @format */

'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Accordion({ ...props }) {
	return <AccordionPrimitive.Root data-slot='accordion' {...props} />
}

function AccordionItem({ className, ...props }) {
	return (
		<AccordionPrimitive.Item
			data-slot='accordion-item'
			className={cn('last:border-b-0', className)}
			{...props}
		/>
	)
}

function AccordionTrigger({ className, children, ...props }) {
	return (
		<AccordionPrimitive.Header className='flex'>
			<AccordionPrimitive.Trigger
				data-slot='accordion-trigger'
				className={cn(
					'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-bold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer touch-action-manipulation',
					className,
				)}
				{...props}
			>
				{children}
				<ChevronDownIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-500' />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	)
}

function AccordionContent({ className, children, ...props }) {
	return (
		<AccordionPrimitive.Content
			data-slot='accordion-content'
			className={cn(
				'overflow-hidden transition-all data-[state=closed]:animate-(--animate-accordion-up-smooth) data-[state=open]:animate-(--animate-accordion-down-smooth)',
				className,
			)}
			{...props}
		>
			<div className='pt-0 pb-4 antialiased text-rendering-optimizelegibility'>
				{children}
			</div>
		</AccordionPrimitive.Content>
	)
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

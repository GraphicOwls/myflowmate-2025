/** @format */

import React from 'react'
import SectionHeader from './SectionHeader'
import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'

export default function Pricing() {
	const pricingPlans = [
		{
			duration: '30',
			price: '60',
			bookingLink: 'https://savvycal.com/myflowmate/half-hour-session',
			popular: false,
			isActive: true,
		},
		{
			duration: '60',
			price: '120',
			bookingLink: 'https://savvycal.com/myflowmate/hour-session',
			popular: true,
			isActive: true,
		},
		{
			duration: '120',
			price: '240',
			bookingLink: 'https://savvycal.com/myflowmate/hour-session',
			popular: false,
			isActive: false,
		},
	]

	const pricingDetails = [
		{
			detail: ' minute session',
			zoom: false,
		},
		{
			detail: '1-on-1 session',
			zoom: false,
		},
		{
			detail: 'Screen share via Zoom',
			zoom: true,
		},
		{
			detail: 'Personalized support',
			zoom: false,
		},
	]

	return (
		<section
			className='border-b border-stone-400 border-dashed'
			id='book-session'
		>
			<SectionHeader
				title='Simple Pricing'
				subtitle='Your goals. Your projects. Feel confident about approaching your ideas in Webflow with a little help from your friend.'
			/>
			<Container>
				<div className='max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-stone-400 border-dashed border-r'>
					{pricingPlans.map((plan, index) => (
						<div
							key={index}
							className={clsx('py-16 px-12 grid gap-6', {
								'bg-accent border-l border-stone-400 border-dashed border-r':
									plan.popular,
							})}
						>
							<div className='mb-4'>
								<h2 className='mb-4 font-semibold'>{`${plan.duration}-Min Session`}</h2>
								<span className='text-5xl font-bold'>{`$${plan.price}`}</span>
							</div>
							<div>
								<p className='mb-4 text-sm font-semibold'>Session Details:</p>
								<ul>
									{pricingDetails.map((detail, index) => (
										<li
											className='mb-4 flex justify-between items-center'
											key={index}
										>
											<span className='flex items-center gap-3'>
												{index === 0 ? plan.duration : null}
												{detail.detail}
												{detail.zoom && (
													<svg
														width='21'
														height='20'
														viewBox='0 0 21 20'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<g clipPath='url(#clip0_57_111)'>
															<path
																d='M10.3333 20C15.8564 20 20.3335 15.5225 20.3335 9.9998C20.3335 4.47708 15.8564 0 10.3333 0C4.81018 0 0.333496 4.47708 0.333496 9.9998C0.333496 15.5225 4.81057 20 10.3333 20Z'
																fill='#2196F3'
															/>
															<path
																fillRule='evenodd'
																clipRule='evenodd'
																d='M6.20166 12.8581H12.8154V8.00836C12.8154 7.27771 12.2233 6.68561 11.4927 6.68561H4.87891V11.5353C4.87891 12.266 5.47101 12.8581 6.20166 12.8581ZM13.6969 11.0948L16.3424 12.8581V6.68561L13.6973 8.44928L13.6969 11.0948Z'
																fill='white'
															/>
														</g>
														<defs>
															<clipPath id='clip0_57_111'>
																<rect
																	width='20'
																	height='20'
																	fill='white'
																	transform='translate(0.333496)'
																/>
															</clipPath>
														</defs>
													</svg>
												)}
											</span>
											<svg
												width='20'
												height='20'
												viewBox='0 0 20 20'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M16.6668 5L7.50016 14.1667L3.3335 10'
													stroke='black'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</li>
									))}
								</ul>
							</div>
							<Button
								asChild
								disabled={!plan.isActive}
								className={clsx({
									'cursor-not-allowed opacity-50': !plan.isActive,
								})}
							>
								<a
									href={plan.isActive ? plan.bookingLink : undefined}
									data-savvycal-embed
									data-view='month'
									data-theme='light'
									aria-disabled={!plan.isActive}
								>
									{plan.isActive ? 'Book Session' : 'Unavailable'}
								</a>
							</Button>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

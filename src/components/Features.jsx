/** @format */

import React from 'react'
import Container from './Container'
import Image from 'next/image'

const features = [
	{
		title: 'Element Structuring',
		description:
			'Learn to Properly & professionally structure elements in your projects for organization & efficiency when building in Webflow.',
	},
	{
		title: 'Responsive Design',
		description:
			'Learn to properly convert your structure & components to be easily responsive for all your new visitors on any mobile platform.',
	},
	{
		title: 'Build Components',
		description:
			'Learn to build many unique & re-usable components to use across your website to build faster & more efficiently.',
	},
	{
		title: 'Custom Interactions',
		description:
			'Dive into simple & complex Webflow interactions that will attract your viewers attention & bring your website to life.',
	},
	{
		title: 'Webflow Symbols',
		description:
			'Learn what you can do with Webflow symbols to turn components into easily manageable elements that update site wide.',
	},
	{
		title: 'CMS Structure',
		description:
			"Unlock the full power of Webflow's CMS. Learn the ins & outs of collections and how they work with each other.",
	},
]

function Features() {
	return (
		<section className='border-b border-stone-400 border-dashed'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-2 items-stretch justify-stretch'>
					<div className=''>
						<Image
							src={'/webflow-screenshot.png'}
							alt='Webflow Designer'
							width={2066}
							height={1280}
							className='w-full h-full object-cover object-right'
						/>
					</div>
					<div className='p-16'>
						<h3 className='text-2xl font-bold mb-8'>Master Webflow</h3>
						<ul className='grid grid-cols-1 md:grid-cols-2 gap-8 list'>
							{features.map((feature, index) => (
								<li key={index}>
									<h4 className='font-bold text-[18px]'>{feature.title}</h4>
									<p>{feature.description}</p>
								</li>
							))}
						</ul>
						<span className='text-stone-700 italic mt-6 block text-xl'>
							And much more...
						</span>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Features

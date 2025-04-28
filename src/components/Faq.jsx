/** @format */

import React from 'react'
import Container from '@/components/Container'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

const faqItems = [
	{
		question: 'Who is this service for?',
		answer: (
			<>
				MyFlowMate is for beginners & intermediate users looking to accelerate
				the learning curve of Webflow. Advanced users can also gain value from
				UI/UX critiquing and other more technical areas. Feel free to{' '}
				<Link
					href='mailto:noahgraskin@gmail.com?subject=MyFlowMate | Message'
					className='font-medium underline'
				>
					contact me
				</Link>{' '}
				if you are uncertain.
			</>
		),
	},
	{
		question: "What if I book time and you don't have a solution for me?",
		answer: (
			<>
				Great question. In the event I am unsure about your unique issues or
				questions I will offer 3 solutions:
				<ol className='list-decimal pl-6 mt-2'>
					<li>We can cover other things that may interest you (obvious one)</li>
					<li>I can research your question with my resources & reschedule</li>
					<li>Offer a refund minus any transaction fees</li>
				</ol>
			</>
		),
	},
	{
		question: "What if I don't like theservice? Can I get a refund?",
		answer: (
			<>
				When you book time, that is essentially what you're getting. My time.
				Due to the nature of the service and dedication of my time,{' '}
				<span className='font-medium'>
					<u>refunds will not be granted</u>
				</span>{' '}
				once our session is over as I cannot get my time back.
				<br />
				<br />
				If you've booked a session & can no longer make it please contact me
				within 24 hours to cancel and you will be refunded. This is the only
				time a refund will be granted.
				<br />
				<br />I ask that you please be absolutely sure & ready when you book an
				appointment so everything runs as smooth as possible.
				<br />
				<br />
				<Link className='font-medium underline' href='/terms-of-service'>
					View Terms of Service
				</Link>
			</>
		),
	},
	{
		question: 'Can I book more time during a call?',
		answer:
			'If you feel you we need more time & there are no reservations following our current call for the duration you are requesting then, yes. However, payment must be handled before the next call begins.',
	},
	{
		question: 'What are your strengths in Webflow?',
		answer: (
			<>
				Where I feel my strong suits are in Webflow is with design & structure
				of a website. This can often be overlooked which results in bad/poor
				class naming, not planning for scaleable websites, having to build
				things over & over for small iterations, bad architecture which is not
				good for SEO and much more.
				<br />
				<br />
				I can also help you with your sites interface & layout, making great use
				of clean white space & nice typefaces, work on style guides for
				continuity etc. Furthermore I can help you set up your CMS and walk you
				through awesome ways you can use it.
				<br />
				<br />
				<Link
					className='font-medium underline'
					href='mailto:noahgraskin@gmail.com?subject=MyFlowMate | Message'
				>
					Contact me
				</Link>{' '}
				if you have questions before ordering.
			</>
		),
	},
	{
		question: 'What if I only use up 5 min?',
		answer:
			'The 30 minutes session is the minimum time required to book a meeting. This means the minimum charge is $60. I would recommend writing down some great questions to get the most out of our meeting. This way you can get the full value of the service and what I have to offer.',
	},
	{
		question: 'Are there any prerequisites?',
		answer: (
			<>
				The only thing you should really have is a{' '}
				<a
					href='https://www.webflow.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					Webflow
				</a>{' '}
				account (which is free to get started 😉).
			</>
		),
	},
	{
		question: 'What if we go a few minutes over? Will I be charged?',
		answer: (
			<>
				Absolutely not! I always give a bit of a buffer period (5-10minutes if
				needed) so we can introduce ourselves. I also really want you to get the
				most from it so my main concern is to make sure you are satisfied with
				our meeting.
				<br />
				<br /> Please keep in mind though, I do have to be respectful of all
				bookings which may follow your time slot as well. Just so we are all on
				the same page.
			</>
		),
	},
	{
		question: 'Can I roll part of my time over to another session?',
		answer:
			"This used to be an option, but no longer is due to it being harder to manage my schedule between meetings and projects. I wish I could continue to offer that, but frankly it's not worth the stress.",
	},
	{
		question: "What if you're late or can't make it to a session?",
		answer: (
			<>
				In the rare chance that I am late to a meeting, I will of course make up
				that time, along with matching that time to a free session of the same
				duration. So if I was 15 min late (God forbid), I would make up that 15
				min as well as give you an extra 15 min free. Depending on the
				scheduling, it may have to be on another day and time, but I will work
				with you and your schedule.
				<br />
				<br /> If for any reason I can't make your meeting I will contact you
				beforehand to reschedule with you for the next earliest availability.
			</>
		),
	},
]

export default function Faq() {
	return (
		<section className='border-b border-stone-400 border-dashed'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					<div className='p-16'>
						<h2 className='text-3xl font-bold max-w-[60ch] mb-6'>
							Your Questions Answered
						</h2>
						<p className='max-w-[48ch] text-xl text-stone-600'>
							Your goals. Your projects. Feel confident about approaching your
							ideas in Webflow with a little help from your friend.
						</p>
					</div>
					<div className='p-16'>
						<Accordion
							type='single'
							collapsible
							defaultValue={faqItems[0].question}
						>
							{faqItems.map((item, index) => (
								<AccordionItem value={item.question} key={index}>
									<AccordionTrigger>{item.question}</AccordionTrigger>
									<AccordionContent>{item.answer}</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</Container>
		</section>
	)
}

'use client'

import { sendContactEmail } from '@/src/actions/contact'
import github from '@/public/icons/github2.svg'
import mail from '@/public/icons/mail.svg'

import { startTransition, useActionState, useEffect, useState } from 'react'
import ContactSucces from './ContactSuccess'
import { AnimatePresence } from 'motion/react'

export default function ContactForm() {
	const [state, formAction] = useActionState(sendContactEmail, {
		success: false,
		errors: null,
		data: null,
	})

	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (state?.success) {
			setIsVisible(true)
			const timer = setTimeout(() => setIsVisible(false), 5000)
			return () => clearTimeout(timer)
		}
	}, [state?.success])

	useEffect(() => {
		if (!isVisible && state?.success === true) {
			const timer = setTimeout(() => {
				startTransition(() => {
					const emptyFormData = new FormData()
					formAction(emptyFormData)
				})
			}, 300)

			return () => clearTimeout(timer)
		}
	}, [isVisible, state?.success, formAction])

	return (
		<>
			<div className='w-full h-full px-10'>
				<div className='w-full lg:min-w-87.5 mt-10 pt-10 lg:border border-black/20 rounded-2xl p-10'>
					<div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
						<div className='font-librecaslon text-3xl'>
							<h3>Got an idea?</h3>
							<p>Let's talk.</p>
						</div>
						<div className='flex flex-wrap gap-3 pt-4 lg:pt-0 lg:pl-10'>
							<a
								href='https://github.com/jlisinski0'
								rel='noopener noreferrer'
								target='_blank'
								className='cursor-pointer flex px-3 py-2 rounded-2xl border border-black/20 hover:opacity-60 transition-opacity duration-300'>
								<img src={github.src} width={20} height={20} alt='Logo of github' />
								<p className='pl-2 text-base font-bold font-cormorant'>Github</p>
							</a>
							<a href='mailto:jlisinski@proton.me' className='cursor-pointer flex px-3 py-2 rounded-2xl border border-black/20 hover:opacity-60 transition-opacity duration-300'>
								<img src={mail.src} width={20} height={20} alt='Envlope' />
								<p className='pl-2 text-base  font-bold font-cormorant '>Email</p>
							</a>
						</div>
					</div>
					<div className='my-10 bg-black/20 w-full h-px'></div>
					<form className='flex flex-col gap-3' action={formAction}>
						<input className='bg-creamWhite p-2 border border-white rounded-2xl text-sm lg:text-base' type='text' name='name' placeholder='Name' defaultValue={state?.data?.name ?? ''} />
						{state?.errors?.name && <p className='pl-1 text-red-500 text-sm'>{state.errors.name[0]}</p>}
						<input className='bg-creamWhite p-2 border border-white rounded-2xl text-sm lg:text-base' type='email' name='email' placeholder='Email' defaultValue={state?.data?.email || ''} />
						{state?.errors?.email && <p className='pl-1 text-red-500 text-sm'>{state.errors.email[0]}</p>}
						<textarea className='bg-creamWhite p-2 border border-white rounded-2xl text-sm lg:text-base' name='message' placeholder='Tell me about your project or idea...'></textarea>
						{state?.errors?.message && <p className='pl-1 text-red-500 text-sm'>{state.errors.message[0]}</p>}
						<div className=' flex justify-between flex-wrap w-full'>
							<div className='flex items-center gap-2'>
								<div className='size-2 lg:size-3 bg-green rounded-full animate-pulse duration-800'></div>
								<p className='text-sm lg:text-base'>I usually respond within 24 hours</p>
							</div>
							<button className='cursor-pointer border border-black/20 rounded-2xl mt-4 lg:mt-0 py-2 px-6 hover:opacity-60 transition-opacity duration-300' type='submit'>
								Send
							</button>
						</div>
					</form>
				</div>

				<AnimatePresence key='contact-success'>{isVisible && <ContactSucces />}</AnimatePresence>
			</div>
		</>
	)
}

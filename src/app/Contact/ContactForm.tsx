import { sendContactEmail } from '@/src/actions/contact'
import github from '@/public/icons/github2.svg'
import mail from '@/public/icons/mail.svg'
import Image from 'next/image'
import { div } from 'motion/react-client'

export default function ContactForm() {
	return (
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
							<Image src={github} width={20} height={20} alt='Logo of github' />
							<p className='pl-2 text-base font-bold font-cormorant'>Github</p>
						</a>
						<a href='mailto:jlisinski@proton.me' className='cursor-pointer flex px-3 py-2 rounded-2xl border border-black/20 hover:opacity-60 transition-opacity duration-300'>
							<Image src={mail} width={20} height={20} alt='Envlope' />
							<p className='pl-2 text-base  font-bold font-cormorant '>Email</p>
						</a>
					</div>
				</div>
				<div className='my-10 bg-black/20 w-full h-px'></div>
				<form className='flex flex-col gap-3' action={sendContactEmail}>
					<input className='bg-creamWhite p-2 border border-white rounded-2xl text-sm lg:text-base' type='text' name='name' placeholder='Name' />
					<input className='bg-creamWhite p-2 border border-white rounded-2xl text-sm lg:text-base' type='email' name='email' placeholder='Email' />
					<textarea className='bg-creamWhite p-2 border border-white rounded-2xl text-sm lg:text-base' name='message' placeholder='Tell me about your project or idea...'></textarea>
					<div className=' flex justify-between flex-wrap w-full'>
						<div className='flex items-center gap-2'>
							<div className='size-2 lg:size-3 bg-green rounded-full animate-pulse duration-800'></div>
							<p className='text-sm lg:text-base'>I usually respond within 24 hours</p>
						</div>
						<button className='cursor-pointer border border-black/20 rounded-2xl py-2 px-6 hover:opacity-60 transition-opacity duration-300' type='submit'>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

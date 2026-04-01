import { motion } from 'motion/react'

export default function ContactSuccess() {
	return (
		<motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.4 }} className='fixed top-30  left-1/2 -translate-x-1/2'>
			<div className='rounded-2xl p-0.5 glow-border w-fit'>
				<div className='w-40 h-15 rounded-[14px] bg-green flex items-center justify-center'>
					<p className='text-center text-[12px] font-bold px-2 text-black'>Successfully sent a message</p>
				</div>
			</div>
		</motion.div>
	)
}

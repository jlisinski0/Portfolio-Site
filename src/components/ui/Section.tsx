import { ReactNode } from 'react'

export default function Section({ id, children }: { id: string; children: ReactNode }) {
	return (
		<section className='h-dvh w-full bg-white border border-black/5' id={id}>
			{children}
		</section>
	)
}

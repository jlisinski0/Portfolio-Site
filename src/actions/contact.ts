'use server'

import { Resend } from 'resend'
import { contactSchema } from '../lib/contact.schema'
import type { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(prevState: any, formData: FormData) {
	const rawData = {
		name: (formData.get('name') as string) ?? '',
		email: (formData.get('email') as string) ?? '',
		message: (formData.get('message') as string) ?? '',
	}

	const parsed = contactSchema.safeParse(rawData)

	if (!parsed.success) {
		return {
			success: false,
			errors: parsed.error.flatten().fieldErrors,
			data: rawData,
		}
	}

	await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: 'fovikson@proton.me',
		subject: `New message from ${parsed.data.name}`,
		html: `
        <p><strong>From: </strong>${parsed.data.name} (${parsed.data.email})</p> 
        <p><strong>Message: </strong>${parsed.data.message}</p> 
        `,
	})

	return { success: true, errors: null, data: null }
}

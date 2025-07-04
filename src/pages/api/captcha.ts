import type { APIRoute } from 'astro'

// Secret key for reCAPTCHA validation
const SECRET = import.meta.env.RECAPTCHA_SECRET

/**
 * Handles POST requests to validate reCAPTCHA tokens.
 *
 * @param {Object} context - The context object containing the request.
 * @param {Request} context.request - The request object containing the body data.
 * @returns {Promise<Response>} A response object indicating the result of the reCAPTCHA validation.
 */
export const POST: APIRoute = async ({ request }) => {
	const bodyResponse = await request.json()
	let code = 200
	let message = 'Captcha Valido'

	try {
		// Verify the reCAPTCHA token with Google's reCAPTCHA API
		const siteVerify = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET}&response=${bodyResponse.token}`,
			{
				method: 'POST',
			}
		)
		const result = await siteVerify.json()

		// Check the result of the reCAPTCHA verification
		if (!result.success) {
			code = 400
			message = 'Captcha Invalido'
		}

		return new Response(
			JSON.stringify({
				message: message,
				code: code,
			}),
			{
				status: 200,
			}
		)
	} catch (error) {
		console.error(error)

		return new Response(
			JSON.stringify({
				message: 'Ha ocurrido un error al enviar los datos.',
				code: 500,
				error: error.toString(), // Converting error to string for better logging
			}),
			{
				status: 500,
			}
		)
	}
}

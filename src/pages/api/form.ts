import transporter from '../../utilities/nodemailer'
import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.formData()
	const nombre = formData.get('nombre')
	const email = formData.get('email')
	const mensaje = formData.get('message')

	try {
		await transporter.sendMail({
			from: '"TGDA" <l4e@tgdadental.com>',
			to: ['citas@tgdadental.com, poldimer@loco4ever.com'],
			subject: 'Nueva solicitud de cita',
			html: `
        <h1>Nueva solicitud de cita</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
		})

		return new Response(
			JSON.stringify({
				message: 'Datos enviados correctamente',
				code: 200,
			}),
			{
				status: 200,
			}
		)
	} catch (error) {
		console.log(error)

		return new Response(
			JSON.stringify({
				message: 'Ha ocurrido un error al enviar los datos',
				code: 500,
				error: error,
			}),
			{
				status: 500,
			}
		)
	}
}

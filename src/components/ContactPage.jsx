import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// login de Formular
	};

	return (
		<div>
			<Helmet>
				<title>Kontakt</title>
			</Helmet>

			<form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label htmlFor="phone">Phone:</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="message">Message:</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<button type="submit">Send</button>
					<button
						type="reset"
						onClick={() =>
							setFormData({ name: '', email: '', phone: '', message: '' })
						}
					>
						Reset
					</button>
				</div>
			</form>
		</div>
	);
}

import ContactLink from '../../components/contact annotation/ContactLink'
import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import './contact.css'

export const Contact = () => {
	return (
		<div className='page contact-page'>
			<Header />
			<div className='link'>
				<ContactLink />
			</div>
			<Footer />
		</div>
	)
}

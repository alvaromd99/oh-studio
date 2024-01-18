import './contact.css'
/*  import { UseChangePageTitle } from '../../hook/UseChangePageTitle' */
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ContactLink from '../../components/contact-anno/ContactLink'

export const Contact = () => {
	/* const pageTitle = 'Profile--OH.STUDIO'
	UseChangePageTitle(pageTitle) */

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

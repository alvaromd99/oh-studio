import './home.css'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import ContactLink from '../../components/contact-anno/ContactLink'
import Footer from '../../components/footer/Footer'
import { projectDetails } from '../../constants/constants'
/* import { UseChangePageTitle } from '../../hook/UseChangePageTitle' */

export default function Home() {
	/* const pageTitle = 'OH.STUDIO'
	UseChangePageTitle(pageTitle) */

	return (
		<div className='page home-page'>
			<Header />
			<div className='home-header'>
				<h1>A brand and product designer working with clients globally</h1>
				<div className='expertise-cont'>
					<p>Expertise</p>
					<div className='expertise'>Branding</div>
					<div className='expertise'>Product</div>
					<div className='expertise'>Design Systems</div>
				</div>
			</div>
			<main>
				{projectDetails.map((project) => (
					<Card
						key={project.id}
						name={project.name}
						image={project.image}
						url={project.url}
					/>
				))}
			</main>
			<div className='contact-link'>
				<ContactLink />
			</div>
			<Footer />
		</div>
	)
}

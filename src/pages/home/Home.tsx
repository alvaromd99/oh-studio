import { Card } from '../../components/card/Card'
import { Header } from '../../components/header/Header'
import { projectDetails } from '../../constants/constants'
import './home.css'

export const Home = () => {
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
					<Card key={project.id} name={project.name} image={project.image} />
				))}
			</main>
		</div>
	)
}

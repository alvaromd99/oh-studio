import { Header } from '../../components/header/Header'
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
			<main></main>
		</div>
	)
}

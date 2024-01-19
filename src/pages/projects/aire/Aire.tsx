import './aire.css'
import BackBtn from '../../../components/btn/BackBtn'
import Title from '../../../components/title/Title'

export default function Aire() {
	return (
		<div className='page aire'>
			<BackBtn />
			<Title text='A better way to deal with every day.' project='Aire' />
			<main>
				<img
					src={
						'https://framerusercontent.com/images/mGxIaDhGjujbfshox24OyOTIc9E.jpg?scale-down-to=2048'
					}
					alt='Aire image 1'
					className='big-img'
				/>
			</main>
		</div>
	)
}

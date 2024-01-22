import './projects.css'
import BackBtn from '../../components/btn/BackBtn'
import Title from '../../components/title/Title'

export default function Correlated() {
	return (
		<div className='page project correlated'>
			<BackBtn />
			<Title
				text='From onboarding to automation.A seamless user journey.'
				project='Correlated'
			/>
			<main>
				<img
					src='https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=2048'
					alt='Correlated image 1'
				/>
			</main>
		</div>
	)
}

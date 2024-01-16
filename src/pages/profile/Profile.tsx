import Annotation from '../../components/anotation/Annotation'
import { Header } from '../../components/header/Header'
import './profile.css'

export const Profile = () => {
	return (
		<div className='page profile-page'>
			<Header />
			<h1>Hi 👋🏼 I'm Oli.</h1>
			<div className='profile-images-cont'>
				<img
					src='https://framerusercontent.com/images/wJINOk3BFAbQRx6ZySXfbltPxU.jpg?scale-down-to=1024'
					alt='Profile image'
				/>
				<img
					src='https://framerusercontent.com/images/O3Foxt0XkzTsjGc74Ap0Hrxtz4c.jpg?scale-down-to=1024'
					alt='Profile image 2'
				/>
			</div>
			<Annotation
				text='A freelance designer based in the UK. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.'
				type='About'
				separation={10}
			/>
			<Annotation text="Where I've worked" type='Experience' separation={15} />
			<div className='experience-cont'></div>
		</div>
	)
}

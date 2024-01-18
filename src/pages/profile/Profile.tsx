import './profile.css'
import { clientDetails, workExperienceDetails } from '../../constants/constants'
import { useRef } from 'react'
import { UseIntersectionObserver } from '../../hook/UseIntersectionObserver'
/* import { UseChangePageTitle } from '../../hook/UseChangePageTitle' */
import Header from '../../components/header/Header'
import Annotation from '../../components/annotation/Annotation'
import ExpBlock from '../../components/exp block/ExpBlock'
import ContactLink from '../../components/contact-anno/ContactLink'
import Footer from '../../components/footer/Footer'

export const Profile = () => {
	/* const pageTitle = 'Profile--OH.STUDIO'
	UseChangePageTitle(pageTitle) */

	const experienceRef = useRef(null)
	const clientRef = useRef(null)
	UseIntersectionObserver([experienceRef, clientRef])

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
			<div className='experience-cont' ref={experienceRef}>
				{workExperienceDetails.map((work) => (
					<ExpBlock
						key={work.id}
						time={work.timeWorking}
						where={work.place}
						position={work.position}
						type={work.type}
					/>
				))}
			</div>
			<Annotation
				text={"Who I've worked with"}
				type={'Clients'}
				separation={10}
			/>
			<div className='clients-cont' ref={clientRef}>
				{clientDetails.map((client, index) => (
					<img src={client} alt='Client logo' key={index} />
				))}
			</div>
			<div className='contact-link'>
				<ContactLink />
			</div>
			<Footer />
		</div>
	)
}

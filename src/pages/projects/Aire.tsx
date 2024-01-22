import './projects.css'
import Title from '@/title/Title'
import BackBtn from '@/btn/BackBtn'
import Overview from '@/overview/Overview'
import ProjectInfo from '@/info/ProjectInfo'
import ContactLink from '@/contact-link/ContactLink'
import Footer from '@/footer/Footer'
import { useEffect } from 'react'

export default function Aire() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className='page project aire'>
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
				<ProjectInfo
					client='Aire'
					studio='OH&CO'
					role='Creative Director'
					focus='Brand Identity'
				/>
				<div className='double-img'>
					<img
						src='https://framerusercontent.com/images/KAXNtzMy2AYmtasCLdNEKIU2wI.jpg?scale-down-to=1024'
						alt='Aire image 2'
					/>
					<img
						src='https://framerusercontent.com/images/yU8ZKQFThmUFqfC2FYZqcGbWw.jpg?scale-down-to=1024'
						alt='Aire image 3'
					/>
				</div>
				<Overview text='I worked with Aire to develop a brand that firmly positions them as a premium lifestyle brand. The name Aire was inspired by the companies conception in Aire Street Workshops, in addition to aligning well with how the product makes you feel. The wordmark has been designed to convey the feeling of ease and simplicity whilst encapsulating a premium feel. Aire believes in the power of CBD to help people manage the day to day a little better — so I developed a strap-line which embodied that message. A better way to deal with every day.' />
				<img
					src={
						'https://framerusercontent.com/images/1ZNxQVbQdraZjjmKyBwxrioAwvc.jpg?scale-down-to=2048'
					}
					alt='Aire image 4'
					className='big-img'
				/>
				<div className='double-img'>
					<img
						src='https://framerusercontent.com/images/wQuOrcu37DXYfaXafEJ6y6Uo.jpg?scale-down-to=2048'
						alt='Aire image 5'
					/>
					<img
						src='https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=2048'
						alt='Aire image 6'
					/>
				</div>
				<img
					src='https://framerusercontent.com/images/DmSvG2vRgGHkjr2izJsUcpWPs.jpg?scale-down-to=2048'
					alt='Aire image 7'
					className='big-img'
				/>
				<img
					src='https://framerusercontent.com/images/XyMJtcTk4JgOgG8gvE7Xo9ssy3E.gif'
					alt='Aire gif 1'
					className='big-img'
				/>
				<img
					src='https://framerusercontent.com/images/pRhnMswaeFkyMfJX0Hwwh0QTQ.jpg?scale-down-to=2048'
					alt='Aire img 8'
					className='big-img'
				/>
				<img
					src='https://framerusercontent.com/images/3wAtzo0qvmxyJhsWXvruyTZtRU.jpg?scale-down-to=2048'
					alt='Aire img 9'
					className='big-img'
				/>
				<div className='double-img'>
					<img
						src='https://framerusercontent.com/images/XaVdbFmdnBjuIAO6uR2K4xlQ.jpg?scale-down-to=2048'
						alt='Aire img 10'
					/>
					<img
						src='https://framerusercontent.com/images/i3WtVhahDcZd4OywmX9rXkq7yPo.jpg?scale-down-to=2048'
						alt='Aire img 11'
					/>
				</div>
				<div className='contact-link'>
					<ContactLink />
				</div>
				<Footer />
			</main>
		</div>
	)
}

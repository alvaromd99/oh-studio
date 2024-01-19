import './aire.css'
import BackBtn from '../../../components/btn/BackBtn'
import Title from '../../../components/title/Title'
import ProjectInfo from '../../../components/info/ProjectInfo'

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
				<ProjectInfo
					client={'Aire'}
					studio={'OH&CO'}
					role={'Creative Director'}
					focus={'Brand Identity'}
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
			</main>
		</div>
	)
}

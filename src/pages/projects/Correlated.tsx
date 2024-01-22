import './projects.css'
import BackBtn from '../../components/btn/BackBtn'
import Title from '../../components/title/Title'
import ProjectInfo from '../../components/info/ProjectInfo'
import Overview from '../../components/overview/Overview'

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
					className='big-img'
				/>
				<ProjectInfo
					client='Correlated'
					studio='Friendly Studio'
					role='Lead Designer'
					focus='Product Design'
				/>
				<img
					src='https://framerusercontent.com/images/68Iqel3D27Y4JufI8Uy5OvefWbc.jpg?scale-down-to=2048'
					alt='Correlated image 2'
					className='big-img'
				/>
				<Overview text='I helped the Correlated team improve functionality across their platform and develop a series of new features, all backed up by a robust and distinct design system.' />
				<div className='double-img'>
					<img
						src='https://framerusercontent.com/images/1p2fh6pUhyWU5wo0HuUhGBfq0.jpg'
						alt='Correlated image 3'
					/>
					<img
						src='https://framerusercontent.com/images/vbrM0VmAH5DTwyk1LqtQmxL51s.jpg'
						alt='Correlated image 4'
					/>
				</div>
				<img
					src='https://framerusercontent.com/images/tN8jTohPTXn5uQRpJxyX92NH4MI.jpg?scale-down-to=2048'
					alt='Correlated image 5'
					className='big-img'
				/>
				<img
					src='https://framerusercontent.com/images/eEacfQIEXZe97VYUR5elLz6s4.jpg?scale-down-to=2048'
					alt='Correlated image 6'
					className='big-img'
				/>
				<div className='double-img'>
					<img
						src='https://framerusercontent.com/images/0nNRgAlDOtkHlL9Zy0g89qxnVBw.jpg'
						alt='Correlated image 7'
					/>
					<img
						src='https://framerusercontent.com/images/thOwwRtQEmgMsCmiIA6Pz32uHM.jpg'
						alt='Correlated image 8'
					/>
				</div>
				<img
					src='https://framerusercontent.com/images/lFrqFqQHwbgjUIEdNoDqx0ByQbA.jpg?scale-down-to=2048'
					alt='Correlated image 9'
					className='big-img'
				/>
				<div className='double-img'>
					<img
						src='https://framerusercontent.com/images/As3sZJW3p7ZozhuXUdkNipZNg.jpg'
						alt='Correlated image 10'
					/>
					<img
						src='https://framerusercontent.com/images/cWbxOdQuIb89b5L55hjKxdF7Jhw.jpg'
						alt='Correlated image 11'
					/>
				</div>
			</main>
		</div>
	)
}

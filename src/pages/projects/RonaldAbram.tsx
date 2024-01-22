import BigImage from '../../components/big-image/BigImage'
import BigVideo from '../../components/big-video/BigVideo'
import BackBtn from '../../components/btn/BackBtn'
import ContactLink from '../../components/contact-link/ContactLink'
import DoubleImage from '../../components/double-img/DoubleImage'
import Footer from '../../components/footer/Footer'
import ProjectInfo from '../../components/info/ProjectInfo'
import Overview from '../../components/overview/Overview'
import Title from '../../components/title/Title'
import { RonaldAbramProjectImages as images } from '../../constants/constants'
import './projects.css'

export default function RonaldAbram() {
	return (
		<div className='page project ronald'>
			<BackBtn />
			<Title
				text='A luxury jewellery brand rich in heritage'
				project='Ronald Abram'
			/>
			<main>
				<BigVideo src={images[0].src} />
				<ProjectInfo
					client='Ronald Abram'
					studio='Onstate'
					role='Lead Designer'
					focus='Brand Identity'
				/>
				<DoubleImage
					src1={images[1].src}
					alt1={images[1].src}
					src2={images[2].src}
					alt2={images[2].src}
				/>
				<Overview text="I crafted a series of user interfaces for their ecommerce platform. To supplement the designs I also art directed a range of imagery inspired by Monokel's Scandinavian heritage." />
				<BigImage src={images[3].src} alt={images[3].alt} />
				<div className='double-img'>
					<video
						className='small-video'
						src={images[0].src}
						loop
						autoPlay
						muted
						playsInline></video>
					<img src={images[4].src} alt={images[4].alt} />
				</div>
				<BigImage src={images[5].src} alt={images[5].alt} />
				<BigImage src={images[6].src} alt={images[6].alt} />
				<DoubleImage
					src1={images[7].src}
					alt1={images[7].src}
					src2={images[8].src}
					alt2={images[8].src}
				/>
				<BigImage src={images[9].src} alt={images[9].alt} />
				<DoubleImage
					src1={images[10].src}
					alt1={images[10].src}
					src2={images[11].src}
					alt2={images[11].src}
				/>
				<BigImage src={images[12].src} alt={images[12].alt} />
				<div className='contact-link'>
					<ContactLink />
				</div>
				<Footer />
			</main>
		</div>
	)
}

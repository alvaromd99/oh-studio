import BigImage from '../../components/big-image/BigImage'
import BigVideo from '../../components/big-video/BigVideo'
import BackBtn from '../../components/btn/BackBtn'
import DoubleImage from '../../components/double-img/DoubleImage'
import ProjectInfo from '../../components/info/ProjectInfo'
import Overview from '../../components/overview/Overview'
import Title from '../../components/title/Title'
import { RonaldAbramProjectImages as images } from '../../constants/constants'

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
			</main>
		</div>
	)
}

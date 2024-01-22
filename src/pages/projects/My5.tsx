import { useEffect } from 'react'
import BigImage from '../../components/big-image/BigImage'
import BackBtn from '../../components/btn/BackBtn'
import Title from '../../components/title/Title'
import { My5ProjectImages as images } from '../../constants/constants'
import ProjectInfo from '../../components/info/ProjectInfo'
import Overview from '../../components/overview/Overview'
import DoubleImage from '../../components/double-img/DoubleImage'
import ContactLink from '../../components/contact-link/ContactLink'
import Footer from '../../components/footer/Footer'

export default function My5() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className='page project my5'>
			<BackBtn />
			<Title text='A new interface for the My5 app' project='Channel 5' />
			<main>
				<BigImage src={images[0].src} alt={images[0].alt} />
				<ProjectInfo
					client='Channel 5'
					studio='UI Centric'
					role='Senior Designer'
					focus='Product Design'
				/>
				<BigImage src={images[1].src} alt={images[1].alt} />
				<Overview text='I worked with UI Centric and the team at Channel 5 to redesign their My5 platform across iOS and Android, all backed up by a robust and distinct design system.' />
				<DoubleImage
					src1={images[2].src}
					alt1={images[2].alt}
					src2={images[3].src}
					alt2={images[3].alt}
				/>
				<BigImage src={images[4].src} alt={images[4].alt} />
				<DoubleImage
					src1={images[5].src}
					alt1={images[5].alt}
					src2={images[6].src}
					alt2={images[6].alt}
				/>
				<BigImage src={images[7].src} alt={images[7].alt} />
				<DoubleImage
					src1={images[8].src}
					alt1={images[8].alt}
					src2={images[9].src}
					alt2={images[9].alt}
				/>
				<BigImage src={images[10].src} alt={images[10].alt} />
				<DoubleImage
					src1={images[11].src}
					alt1={images[11].alt}
					src2={images[12].src}
					alt2={images[12].alt}
				/>
				<BigImage src={images[13].src} alt={images[13].alt} />
				<div className='contact-link'>
					<ContactLink />
				</div>
				<Footer />
			</main>
		</div>
	)
}

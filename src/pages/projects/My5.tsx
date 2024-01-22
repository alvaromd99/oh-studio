import BigImage from '../../components/big-image/BigImage'
import BackBtn from '../../components/btn/BackBtn'
import Title from '../../components/title/Title'
import { My5ProjectImages as images } from '../../constants/constants'

export default function My5() {
	return (
		<div className='page project my5'>
			<BackBtn />
			<Title text='A new interface for the My5 app' project='Channel 5' />
			<main>
				<BigImage src={images[0].src} alt={images[0].alt} />
			</main>
		</div>
	)
}

import './backBtn.css'
import crossIcon from '../../assets/cross.svg'
import { useLocation } from 'wouter'

export default function BackBtn() {
	const [, setLocation] = useLocation()

	const handleBackBtnClick = () => {
		setLocation('/')
	}

	return (
		<button className='back-btn' onClick={handleBackBtnClick}>
			<img src={crossIcon} alt='X icon' />
		</button>
	)
}

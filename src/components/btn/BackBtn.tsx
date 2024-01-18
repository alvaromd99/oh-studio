import './backBtn.css'
import crossIcon from '../../assets/cross.svg'

export default function BackBtn() {
	return (
		<button className='back-btn'>
			<img src={crossIcon} alt='X icon' />
		</button>
	)
}

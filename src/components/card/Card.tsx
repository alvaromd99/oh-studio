import './card.css'
import ArrowIcon from '../../assets/topRightArrow.svg'
import { useLocation } from 'wouter'

interface CardProps {
	name: string
	image: string
}

export default function Card({ name, image }: CardProps) {
	const [, setLocation] = useLocation()

	const handleCardClick = () => {
		setLocation(`/projects/${name.toLowerCase()}`)
	}

	return (
		<div className='card' onClick={handleCardClick}>
			<p>{name}</p>
			<span>
				<img src={ArrowIcon} alt='Arrow' />
			</span>
			<img src={image} alt={`${name} project image.`} />
		</div>
	)
}

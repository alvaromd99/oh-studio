import './card.css'
import ArrowIcon from '../../assets/topRightArrow.svg'

interface CardProps {
	name: string
	image: string
}

export const Card = ({ name, image }: CardProps) => {
	return (
		<div className='card'>
			<p>{name}</p>
			<span>
				<img src={ArrowIcon} alt='Arrow' />
			</span>
			<img src={image} alt={`${name} project image.`} />
		</div>
	)
}

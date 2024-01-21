import './card.css'
import ArrowIcon from '../../assets/topRightArrow.svg'
import { Link } from 'wouter'

interface CardProps {
	name: string
	image: string
	url: string
}

export default function Card({ name, image, url }: CardProps) {
	return (
		<Link to={`/projects/${url}`}>
			<div className='card'>
				<p>{name}</p>
				<span>
					<img src={ArrowIcon} alt='Arrow' />
				</span>
				<img src={image} alt={`${name} project image.`} />
			</div>
		</Link>
	)
}

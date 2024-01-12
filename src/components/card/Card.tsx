import './card.css'

interface CardProps {
	name: string
	image: string
}

export const Card = ({ name, image }: CardProps) => {
	return (
		<div className='card'>
			<p>{name}</p>
			<img src={image} alt={`${name} project image.`} />
		</div>
	)
}

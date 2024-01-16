import './expBlock.css'

interface expBlocProps {
	time: string
	where: string
	position: string
	type: string
}

export default function ExpBlock({
	time,
	where,
	position,
	type,
}: expBlocProps) {
	return (
		<div className='block-cont'>
			<p>{time}</p>
			<h4>{where}</h4>
			<p>{position}</p>
			<div>{type}</div>
		</div>
	)
}

import './Annotation.css'

interface AnnotationProps {
	text: string
	type: string
	separation: number
}

export default function Annotation({
	text,
	type,
	separation,
}: AnnotationProps) {
	return (
		<div className='annotation' style={{ marginTop: `${separation}rem` }}>
			<div className='type'>{type}</div>
			<h3>{text}</h3>
		</div>
	)
}

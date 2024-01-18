import { UseIntersectionObserver } from '../../hook/UseIntersectionObserver'
import './annotation.css'
import { useRef } from 'react'

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
	const divRef = useRef(null)

	UseIntersectionObserver([divRef])

	return (
		<div
			ref={divRef}
			className={`annotation `}
			style={{ marginTop: `${separation}rem` }}>
			<div className='type'>{type}</div>
			<h3>{text}</h3>
		</div>
	)
}

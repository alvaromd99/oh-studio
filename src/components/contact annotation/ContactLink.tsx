import { useRef } from 'react'
import './contactLink.css'
import { UseIntersectionObserver } from '../../hook/UseIntersectionObserver'

export default function ContactLink() {
	const paragraphRef = useRef(null)
	const linkParagraphRef = useRef(null)

	UseIntersectionObserver([paragraphRef, linkParagraphRef])

	return (
		<div className='contact'>
			<p ref={paragraphRef}>Let's work together.</p>
			<a href='#'>
				<p ref={linkParagraphRef}>Get in touch.</p>
			</a>
		</div>
	)
}

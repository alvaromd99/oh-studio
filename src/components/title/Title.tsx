import './title.css'

interface TitleProps {
	text: string
	project: string
}

export default function Title({ text, project }: TitleProps) {
	return (
		<div className='page-title'>
			<h3>{text}</h3>
			<div className='name'>{project}</div>
		</div>
	)
}

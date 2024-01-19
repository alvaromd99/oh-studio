import './overview.css'

interface OverviewProps {
	text: string
}

export default function Overview({ text }: OverviewProps) {
	return (
		<div className='overview'>
			<p>Overview</p>
			<p>{text}</p>
		</div>
	)
}

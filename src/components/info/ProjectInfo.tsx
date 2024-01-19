import './projectInfo.css'

interface ProjectInfoProps {
	client: string
	studio: string
	role: string
	focus: string
}

export default function ProjectInfo({
	client,
	studio,
	role,
	focus,
}: ProjectInfoProps) {
	return (
		<div className='info-cont'>
			<div>
				<p>Client</p>
				<p>{client}</p>
			</div>
			<div>
				<p>Studio</p>
				<p>{studio}</p>
			</div>
			<div>
				<p>Role</p>
				<p>{role}</p>
			</div>
			<div>
				<p>Focus</p>
				<p>{focus}</p>
			</div>
		</div>
	)
}

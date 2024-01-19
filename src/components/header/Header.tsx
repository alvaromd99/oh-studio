import { Link, useLocation } from 'wouter'
import './header.css'

export default function Header() {
	const [location] = useLocation()

	return (
		<div className='switch'>
			<Link to='/'>
				<div
					className={`option home-opt ${location === '/' ? 'selected' : ''}`}>
					Home
				</div>
			</Link>
			<Link to='/profile'>
				<div
					className={`option profile-opt ${
						location === '/profile' ? 'selected' : ''
					}`}>
					Profile
				</div>
			</Link>
			<Link to='/contact'>
				<div
					className={`option profile-opt ${
						location === '/contact' ? 'selected' : ''
					}`}>
					Contact
				</div>
			</Link>
		</div>
	)
}

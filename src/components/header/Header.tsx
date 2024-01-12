import { useLocation } from 'wouter'
import './header.css'

export const Header = () => {
	const [location, setLocation] = useLocation()

	const handleClick = (to: string) => {
		setLocation(to)
	}

	return (
		<div className='switch'>
			<div
				className={`option home-opt ${location === '/' ? 'selected' : ''}`}
				onClick={() => handleClick('/')}>
				Home
			</div>
			<div
				className={`option profile-opt ${
					location === '/profile' ? 'selected' : ''
				}`}
				onClick={() => handleClick('/profile')}>
				Profile
			</div>
			<div
				className={`option profile-opt ${
					location === '/contact' ? 'selected' : ''
				}`}
				onClick={() => handleClick('/contact')}>
				Contact
			</div>
		</div>
	)
}

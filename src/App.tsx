import './App.css'
import { Route } from 'wouter'
import { Home } from './pages/home/Home'
import { Profile } from './pages/profile/Profile'
import { Contact } from './pages/contact/Contact'

function App() {
	return (
		<div>
			<Route path='/' component={Home} />
			<Route path='/profile' component={Profile} />
			<Route path='/contact' component={Contact} />
		</div>
	)
}

export default App

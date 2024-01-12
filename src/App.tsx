import './App.css'
import { Route } from 'wouter'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Contact } from './pages/Contact'

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

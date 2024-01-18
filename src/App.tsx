import './App.css'
import { Route } from 'wouter'
import { Home } from './pages/home/Home'
import { Profile } from './pages/profile/Profile'
import { Contact } from './pages/contact/Contact'
import ProjectPage from './pages/projects/ProjectPage'

function App() {
	return (
		<div>
			<Route path='/' component={Home} />
			<Route path='/profile' component={Profile} />
			<Route path='/contact' component={Contact} />
			<Route path='/projects/:projectName' component={ProjectPage} />
		</div>
	)
}

export default App

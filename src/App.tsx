import './App.css'
import { Route, Switch } from 'wouter'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Contact from './pages/contact/Contact'
import Aire from './pages/projects/aire/Aire'
import Correlated from './pages/projects/correlated/Correlated'
import My5 from './pages/projects/my5/My5'
import RonaldAbram from './pages/projects/ronald/RonaldAbram'
import NotFound from './pages/404/NotFound'

function App() {
	return (
		<Switch>
			<Route path='/' component={Home} />
			<Route path='/profile' component={Profile} />
			<Route path='/contact' component={Contact} />
			<Route path='/projects/aire' component={Aire} />
			<Route path='/projects/correlated' component={Correlated} />
			<Route path='/projects/my5' component={My5} />
			<Route path='/projects/ronald-abram' component={RonaldAbram} />
			<Route component={NotFound} />
		</Switch>
	)
}

export default App

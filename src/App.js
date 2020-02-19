import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/layout/Header'
import About from './components/pages/About'
import Contacts from './components/contacts/Contacts'
import AddContacts from './components/contacts/AddContacts'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './Context'
import NotFound from './components/pages/NotFound'

function App() {
	return (
		<Provider className='App'>
			<Router>
				<Header branding='Contact Manager' />

				<div className='container'>
					<Switch>
						<Route exact path='/' component={Contacts} />
						<Route exact path='/about' component={About} />
						<Route exact path='/contact/add' component={AddContacts} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		</Provider>
	)
}
export default App

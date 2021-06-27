import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import indexRoutes from './routes/index.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Login from '../src/views/login.jsx'
import Register from '../src/views/register.jsx'

import userProfileAction from './redux/user/profile/userProfileAction'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user')

		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser)
			dispatch(userProfileAction.setProfileData(foundUser))
		}
		// eslint-disable-next-line
	}, [])

	return (
		<Router>
			<Switch>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				{indexRoutes.map((prop, key) => {
					return <PrivateRoute path={prop.path} key={key} component={prop.component} />
				})}
			</Switch>
		</Router>
	)
}

export default App

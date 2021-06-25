import React, { useEffect } from 'react'
import './App.css'
import Routes from './routes/Routes'

import { useDispatch } from 'react-redux'

import userProfileAction from './redux/user/profile/userProfileAction'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user')

		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser)
			dispatch(userProfileAction.setProfileData(foundUser))
		}
	}, [])

	return (
		<>
			<Routes />
		</>
	)
}

export default App

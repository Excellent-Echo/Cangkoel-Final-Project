import React, { useEffect } from 'react'
import './App.css'
import Routes from './routes/Routes'

import { useSelector, useDispatch } from 'react-redux'

import userProfileAction from './redux/user/profile/userProfileAction'

function App() {
	const userProfileData = useSelector((state) => state.userProfile)
	const dispatch = useDispatch()

	console.log(userProfileData)

	useEffect(() => {
		const accessToken = localStorage.getItem('token')

		if (accessToken) {
			// dispatch({
			// 	type: 'USER_SET_EMAIL',
			// 	payload: {
			// 		email: 'eddyfromtoken@mail.com'
			// 	}
			// })
			dispatch(userProfileAction.setProfileData(userProfileData))
		} else {
			localStorage.removeItem('token')
		}
	}, [])

	return (
		<>
			<Routes />
		</>
	)
}

export default App

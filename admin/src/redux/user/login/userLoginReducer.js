import { USER_SET_PASSWORD, USER_SET_EMAIL, USER_SET_AUTH } from '../userActionTypes'

const initialState = {
	email: '',
	password: '',
	isAuth: false
}

const userLoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_SET_EMAIL:
			return {
				...state,
				email: action.payload.email
			}
		case USER_SET_PASSWORD:
			return {
				...state,
				password: action.payload.password
			}
		case USER_SET_AUTH:
			return {
				...state,
				isAuth: action.payload.isAuth
			}
		default:
			return state
	}
}

export default userLoginReducer

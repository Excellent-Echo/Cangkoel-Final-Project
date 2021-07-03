import {
	USER_SET_ROLE,
	USER_SET_EMAIL,
	USER_SET_FULLNAME,
	USER_SET_PASSWORD,
	USER_REGISTER_RESET_FORM
} from '../userActionTypes'

const inititalState = {
	email: '',
	password: '',
	full_name: '',
	role: ''
}

const userRegisterReducer = (state = inititalState, action) => {
	switch (action.type) {
		case USER_REGISTER_RESET_FORM:
			return {
				...state
			}
		case USER_SET_EMAIL:
			return {
				...state,
				email: action.payload.email
			}
		case USER_SET_FULLNAME:
			return {
				...state,
				fullName: action.payload.fullName
			}
		case USER_SET_PASSWORD:
			return {
				...state,
				password: action.payload.password
			}
		case USER_SET_ROLE:
			return {
				...state,
				role: action.payload.role
			}
		default:
			return state
	}
}

export default userRegisterReducer

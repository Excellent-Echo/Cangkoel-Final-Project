import { USER_PROFILE_DATA } from '../userActionTypes'

const initialState = {
	id: '',
	email: '',
	full_name: '',
	role: ''
}

const userProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_PROFILE_DATA:
			return {
				...state,
				...action.payload.user
			}

		default:
			return state
	}
}

export default userProfileReducer

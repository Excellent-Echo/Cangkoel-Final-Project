import { USER_PROFILE_DATA, SET_LOADING } from '../userActionTypes'

const initialState = {
	user: null,
	isLoading: false
}

const userProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_PROFILE_DATA:
			return {
				...state,
				user: action.payload.user,
				isLoading: false
			}
		case SET_LOADING:
			return {
				...state,
				isLoading: true
			}

		default:
			return state
	}
}

export default userProfileReducer

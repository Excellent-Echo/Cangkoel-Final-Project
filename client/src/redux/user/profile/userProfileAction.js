import { USER_PROFILE_DATA } from '../userActionTypes'

const setProfileData = (userProfile) => {
	return {
		type: USER_PROFILE_DATA,
		payload: {
			user: userProfile
		}
	}
}

const userProfileAction = {
	setProfileData
}

export default userProfileAction

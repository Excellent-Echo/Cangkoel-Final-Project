import axios from 'axios'

const CloudinaryAPI = axios.create({
	baseURL: process.env.REACT_APP_CLOUDINARY_API
})

export default CloudinaryAPI

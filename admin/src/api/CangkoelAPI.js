import axios from 'axios'

const CangkoelAPI = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL
})

export default CangkoelAPI

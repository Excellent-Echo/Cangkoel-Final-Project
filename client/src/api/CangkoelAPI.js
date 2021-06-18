import axios from 'axios'

const CangkoelAPI = axios.create({
	baseURL: process.env.REACT_APP_NOT_SECRET_CODE
})

export default CangkoelAPI

import axios from 'axios';

const HospitalAPI = axios.create({
	baseURL: 'http://localhost:8080',
});

export default HospitalAPI;

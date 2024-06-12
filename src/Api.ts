import axios from 'axios';

const token = localStorage.getItem('authToken');
const userClient = axios.create({
	headers: {
		'token': token,
	},
});

export default userClient;
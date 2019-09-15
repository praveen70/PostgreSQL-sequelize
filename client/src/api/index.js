
import axios from 'axios';



export function loginApi(data) {
	try {
		const response = axios.post('http://localhost:8082/api/signin/' , data);
		console.log("from api",JSON.stringify(response))
		return response;
	} catch (error) {
		return error;
	}
}
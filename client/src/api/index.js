
import axios from 'axios';

export function loginApi(data) {
	return axios.post('http://localhost:8082/api/signin/' , data)
		.then(res => 
			getUserDetails(res));
}

function getUserDetails(data) {
	localStorage.setItem("authToken",data.data.accessToken)
	
	return axios.get('http://localhost:8082/api/signup/' + data.data.userID)
		.then(res =>  res.data);
}


export function postRootGroupData(data) {
	return axios.post('http://localhost:8082/api/group' , data)
		.then(res =>  res.data );
}
 

export function getRootData() {
	return axios.get('http://localhost:8082/api/group')
		.then(res =>  res.data );
	
}
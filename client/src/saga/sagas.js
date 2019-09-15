import { call, put,  takeLatest } from 'redux-saga/effects';
import api, { loginApi } from '../api/index';
import {  LOGIN_START , LOGIN_START_SUCCESS, LOGIN_START_FAILURE } from '../action/actionType';









export function* loginData() {
	yield takeLatest(LOGIN_START, loginStartData);
}


export function* loginStartData(action) {
	try {
		const loginData = yield call(loginApi, action.payload);
		console.log(loginData)
		if (loginData) {
			yield put({ type: LOGIN_START_SUCCESS, payload: loginData });
		}
	} catch (err) {
		yield put({ type: LOGIN_START_FAILURE, payload: err });
	}
}
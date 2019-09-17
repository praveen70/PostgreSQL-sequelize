import { call, put,  takeLatest } from 'redux-saga/effects';
import api, { loginApi } from '../api/index';
import {  LOGIN_START , LOGIN_START_SUCCESS, LOGIN_START_FAILURE } from '../action/actionType';









export function* loginData() {
	yield takeLatest(LOGIN_START, loginStartData);
}


export function* loginStartData(action) {
	try {
		const responeData = yield call(loginApi, action.payload);
		if (responeData) {
			yield put({ type: LOGIN_START_SUCCESS, payload: responeData });
		}
	} catch (err) {
		yield put({ type: LOGIN_START_FAILURE, payload: err });
	}
}
import { call, put,  takeLatest } from 'redux-saga/effects';
import api, { loginApi , postRootGroupData, getRootData } from '../api/index';
import {  LOGIN_START , LOGIN_START_SUCCESS, LOGIN_START_FAILURE } from '../action/actionType';
import { POST_ROOT_GROUPNAME_START , POST_ROOT_GROUPNAME_SUCCESS, POST_ROOT_GROUPNAME_FAILURE } from '../action/actionType';
import {GET_ROOT_GROUPNAME_START , GET_ROOT_GROUPNAME_SUCCESS, GET_ROOT_GROUPNAME_FAILURE } from '../action/actionType';;




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



export function* rootGroupData() {
	yield takeLatest(POST_ROOT_GROUPNAME_START, rootGroupDataStart);
}


export function* rootGroupDataStart(action) {
	try {
		const responeGroupData = yield call(postRootGroupData, action.payload);
		if (responeGroupData) {
			yield put({ type: POST_ROOT_GROUPNAME_SUCCESS, payload: responeGroupData });
		}
	} catch (err) {
		yield put({ type: POST_ROOT_GROUPNAME_FAILURE, payload: err });
	}
}

export function* getRootGroupData() {
	yield takeLatest(GET_ROOT_GROUPNAME_START, getGroupRootData);
}


export function* getGroupRootData(action) {
	try {
		const responeRootGroupData = yield call(getRootData, action.payload);
		if (responeRootGroupData) {
			yield put({ type: GET_ROOT_GROUPNAME_SUCCESS, payload: responeRootGroupData });
		}
	} catch (err) {
		yield put({ type: GET_ROOT_GROUPNAME_FAILURE, payload: err });
	}
}
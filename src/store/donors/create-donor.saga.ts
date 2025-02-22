import { createDonorAction } from './create-donor.actions';
import { put, call } from 'redux-saga/effects';
import * as API from '../../util/api';

export function* createDonor(action: any) {
  try {
    var data: API.Response = yield call(API.call, {
      endpoint: `/donors/`,
      method: API.Method.POST,
      data: action.payload,
    });
    if (data.status !== 200) throw new Error(data.content);

    yield put(createDonorAction.done({ params: action.payload, result: true }));
  } catch (ex) {
    yield put(createDonorAction.failed({ params: action.payload, error: ex as Error }));
  }
}

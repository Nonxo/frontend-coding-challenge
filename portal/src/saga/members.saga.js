import {call, put, takeLatest} from "@redux-saga/core/effects";
import { fetchAllMembers } from "../services/api/membersService";
import {handleError, handleSuccess} from "../redux/actions/actionCreator";
import * as types from "../redux/actions"

function* read() {
  try {
    const res = yield call(fetchAllMembers);
    if (res) {
      yield put(handleSuccess(types.FETCH_MEMBERS_SUCCESS, res));
    } else {
      yield put(handleError(types.FETCH_MEMBERS_ERROR, 'No members returned'));
    }
  } catch (e) {
    throw e;
  }
}

export default function* watchMembers() {
  yield takeLatest(types.FETCH_MEMBERS, read);
}

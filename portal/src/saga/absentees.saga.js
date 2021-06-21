import { call, put, takeLatest } from "@redux-saga/core/effects";
import { handleError, handleSuccess } from "../redux/actions/actionCreator";
import * as types from "../redux/actions";
import { fetchAllAbsentees } from "../services/api/absenteesService";

function* read() {
  try {
    const res = yield call(fetchAllAbsentees);
    if (res) {
      yield put(handleSuccess(types.FETCH_ABSENTEES_SUCCESS, res.payload));
    } else {
      yield put(
        handleError(types.FETCH_ABSENTEES_ERROR, "No members returned")
      );
    }
  } catch (e) {
    throw e;
  }
}

export default function* watchAbsentees() {
  yield takeLatest(types.FETCH_ABSENTEES, read);
}

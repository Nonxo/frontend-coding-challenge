import { call, put, takeLatest } from "@redux-saga/core/effects";
import { handleError, handleSuccess } from "../redux/actions/actionCreator";
import * as types from "../redux/actions";
import { fetchAllAbsences } from "../services/api/absencesService";

function* read() {
  try {
    const res = yield call(fetchAllAbsences);
    if (res) {
      yield put(handleSuccess(types.FETCH_ABSENCES_SUCCESS, res.payload));
    } else {
      yield put(
        handleError(types.FETCH_ABSENCES_ERROR, "No members returned")
      );
    }
  } catch (e) {
    throw e;
  }
}

export default function* watchAbsences() {
  yield takeLatest(types.FETCH_ABSENCES, read);
}

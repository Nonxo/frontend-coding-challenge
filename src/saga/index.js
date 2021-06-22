import { all } from "@redux-saga/core/effects";
import watchAbsences from "./absences.saga";
import watchMembers from "./membersSaga";

function* rootSaga() {
  yield all([watchAbsences(), watchMembers()]);
}

export default rootSaga;

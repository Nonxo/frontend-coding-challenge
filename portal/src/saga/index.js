import { all } from "@redux-saga/core/effects";
import watchAbsentees from "./absentees.saga";
import watchMembers from "./membersSaga";

function* rootSaga() {
  yield all([watchAbsentees(), watchMembers()]);
}

export default rootSaga;

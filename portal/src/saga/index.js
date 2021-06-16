import { all } from "@redux-saga/core/effects";
import watchMembers from "./members.saga";

function* rootSaga() {
  yield all([watchMembers()]);
}

export default rootSaga;

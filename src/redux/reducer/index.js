import { combineReducers } from "redux";

import Absences from "./absencesReducer";
import Members from "./membersReducers";

const rootReducer = combineReducers({
  Absences,
  Members,
});

export default rootReducer;

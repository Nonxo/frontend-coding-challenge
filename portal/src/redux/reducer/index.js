import { combineReducers } from "redux";

import Absentees from "./absenteesReducer";
import Members from "./membersReducers";

const rootReducer = combineReducers({
  Absentees,
  Members,
});

export default rootReducer;

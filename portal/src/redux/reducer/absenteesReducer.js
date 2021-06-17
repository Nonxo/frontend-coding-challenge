import * as types from "../actions";

const absenteesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_ABSENTEES:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ABSENTEES_SUCCESS:
      return {
        ...state,
        membersList: action.data,
        loading: false,
      };
    case types.FETCH_ABSENTEES_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default absenteesReducer;

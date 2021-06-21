import * as types from "../actions";

const membersReducer = (state = { listOfAllMembers: [] }, action) => {
  switch (action.type) {
    case types.FETCH_MEMBERS:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        listOfAllMembers: action.data,
        loading: false,
      };
    case types.FETCH_MEMBERS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default membersReducer;

import * as types from "../actions";

const memberReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_MEMBERS:
      return {
        ...state,
        loading: true
      }
    case types.FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        membersList: action.data,
        loading: false
      }
    case types.FETCH_MEMBERS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
  }
};

export default memberReducer;

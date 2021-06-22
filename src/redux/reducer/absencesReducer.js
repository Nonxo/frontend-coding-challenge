import * as types from "../actions";

const absencesReducer = (state = { membersList: [], data: [] }, action) => {
  switch (action.type) {
    case types.FETCH_ABSENCES:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ABSENCES_SUCCESS:
      return {
        ...state,
        membersList: action.data,
        total: action.data.length,
        data: action.data,
        loading: false,
      };
    case types.FETCH_ABSENCES_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.FILTER_BY_TYPE:
      return {
        ...state,
        loading: false,
        membersList: [
          ...state.data.filter((absence) => absence.type === action.payload),
        ],
      };
    case types.FILTER_BY_DATE:
      return {
        ...state,
        loading: false,
        membersList: [
          ...state.data.filter(
            (absence) => absence.createdAt === action.payload
          ),
        ],
      };
    case types.FETCH_ABSENCES_PAGINATION:
      return {
        ...state,
        loading: false,
        membersList: [
          ...state.data.slice(action.payload.start, action.payload.end),
        ],
      };

    default:
      return state;
  }
};

export default absencesReducer;

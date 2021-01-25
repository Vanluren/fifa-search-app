import { Action } from "types";
import { State } from "./context";
import {
  QUERY,
  QUERY_FAILED,
  QUERY_SUCCESS,
  SET_LOADING,
  SET_QUERY,
  SET_SEARCH_VIEW,
  RESET_SEARCH,
} from "./action-types";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case RESET_SEARCH: {
      return {
        ...state,
        loading: false,
        query: "",
        error: null,
        submitting: false,
      };
    }
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_SEARCH_VIEW:
      return {
        ...state,
        currentSearch: action.payload,
      };
    case QUERY:
      return { ...state, loading: true, submitting: true };
    case QUERY_FAILED:
      return {
        ...state,
        loading: false,
        submitting: false,
        error: action.payload,
        data: null,
      };
    case QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        submitting: false,
        error: null,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

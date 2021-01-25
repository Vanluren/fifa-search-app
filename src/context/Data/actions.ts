import { createAction } from "utils/createAction";
import errorNormalizer from "utils/errorNormalizer";
import { Action, Player, Error, SearchView } from "types";
import {
  QUERY,
  QUERY_SUCCESS,
  QUERY_FAILED,
  SET_QUERY,
  SET_LOADING,
  SET_SEARCH_VIEW,
  RESET_SEARCH,
} from "./action-types";

const queryAction = (): Action => createAction(QUERY);
const querySuccess = (data: Player[]): Action =>
  createAction(QUERY_SUCCESS, data);
const queryError = (error: Error): Action =>
  createAction(QUERY_FAILED, errorNormalizer(error));
const setQuery = (value: string): Action => createAction(SET_QUERY, value);
const setLoadingState = (state: boolean): Action =>
  createAction(SET_LOADING, state);
const setSearchView = (view: SearchView) => createAction(SET_SEARCH_VIEW, view);
const resetSearchState = () => createAction(RESET_SEARCH);

export {
  queryAction,
  querySuccess,
  queryError,
  setQuery,
  setLoadingState,
  setSearchView,
  resetSearchState,
};

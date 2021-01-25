import { createContext, Dispatch } from "react";
import { ContextState, Player, Action, SearchView } from "types";

export interface State extends ContextState {
  query: string;
  data: Player[] | null;
  dispatch: Dispatch<Action>;
  submitting: boolean;
  currentSearch: SearchView;
}

export const initialState: State = {
  loading: false,
  error: null,
  query: "",
  data: null,
  dispatch: () => null,
  submitting: false,
  currentSearch: "player",
};

const DataContext = createContext<State>(initialState);

DataContext.displayName = "DataContext";

export default DataContext;

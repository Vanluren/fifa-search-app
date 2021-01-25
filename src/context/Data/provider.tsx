import React, { useReducer, ReactNode, ReactElement } from "react";
import DataContext, { initialState } from "./context";
import reducer from "./reducer";

type ProviderProps = {
  children: ReactNode;
};
const DataProvider = ({ children }: ProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

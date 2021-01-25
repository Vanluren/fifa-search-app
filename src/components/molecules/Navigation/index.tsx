import React, { useContext } from "react";
import { SearchView } from "types";
import { DataContext, resetSearchState, setSearchView } from "context/Data";

const VIEWS: { path: SearchView; value: string }[] = [
  { path: "player", value: "Find players" },
  { path: "team", value: "Set a team" },
];

const Navigation = () => {
  const { currentSearch, dispatch } = useContext(DataContext);
  const onViewClick = (view: SearchView) => {
    dispatch(resetSearchState());
    return dispatch(setSearchView(view));
  };

  return (
    <div className="flex flex-row align-start divide-x-2 my-2">
      {VIEWS.map(({ path, value }) => (
        <p
          className={`text-xl cursor-pointer px-2 ${
            path === currentSearch
              ? "text-indigo-900 font-semibold"
              : "text-black"
          }`}
          onClick={() => onViewClick(path)}
        >
          {value}
        </p>
      ))}
    </div>
  );
};

export default Navigation;

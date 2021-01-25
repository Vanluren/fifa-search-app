import React, { useContext, ChangeEvent, FormEvent } from "react";
import {
  DataContext,
  queryAction,
  queryError,
  querySuccess,
  setQuery,
} from "context/Data";
import TextInput from "components/atoms/TextInput";
import Button from "components/atoms/Button";
import { queryForPlayers, setTeam } from "services/api";

const SearchBar = () => {
  const { currentSearch, dispatch, query } = useContext(DataContext);

  const submitBtnValue =
    currentSearch === "team" ? "build team" : "Find players";
  const inputPlaceholder =
    currentSearch === "team"
      ? "Set a budget, and let us build you a team"
      : "Search for players by their name, club or nationality";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      dispatch(queryAction());
      if (currentSearch === "team") {
        return setTeam(query).then((res) => dispatch(querySuccess(res)));
      }
      return queryForPlayers(query).then((res) => dispatch(querySuccess(res)));
    } catch (e) {
      dispatch(queryError(e));
    }
  };

  /**
   * Update the query in state
   * @param {ChangeEvent<HTMLInputElement>} e
   */
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setQuery(e.target.value));

  return (
    <form onSubmit={handleSubmit} className={`flex flex-row w-full`}>
      <TextInput
        inputSize="lg"
        className="w-5/6"
        onChange={onInputChange}
        value={query}
        placeholder={inputPlaceholder}
        required
      />
      <Button className="w-1/6 ml-2" value={submitBtnValue} type="submit" />
    </form>
  );
};

export default SearchBar;

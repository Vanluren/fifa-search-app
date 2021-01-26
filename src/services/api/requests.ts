import { AxiosPromise } from "axios";
import { Player } from "types";
import { Team } from "types";
import Api from "./index";
import { URL_STRINGS } from "./url-constants";

const queryForPlayers = (query: string): AxiosPromise<Player[]> => {
  return Api.get(URL_STRINGS.PLAYERS, {
    params: {
      q: query,
    },
  });
};

const setTeam = (budget: string): AxiosPromise<Team> => {
  return Api.get(URL_STRINGS.SET_TEAM, { params: { q: budget } });
};

export { queryForPlayers, setTeam };

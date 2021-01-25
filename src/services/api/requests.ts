import { Player } from "types";
import { Team } from "types";
import Api from "./index";
import { URL_STRINGS } from "./url-constants";

const queryForPlayers = (query: string): Promise<Player[]> => {
  return Api.get(URL_STRINGS.PLAYERS, {
    params: {
      q: query,
    },
  });
};

const setTeam = (budget: string): Promise<Team> => {
  return Api.get(URL_STRINGS.SET_TEAM, { params: { q: budget } });
};

export { queryForPlayers, setTeam };

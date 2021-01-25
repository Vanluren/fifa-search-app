const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "//localhost:3000/api/v1"
    : "//fifa.vanluren.xyz/api/";

export const URL_STRINGS = {
  BASE_URL,
  PLAYERS: "/players",
  SET_TEAM: "/set-team",
};

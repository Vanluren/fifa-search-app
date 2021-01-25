const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "//localhost:3000"
    : "//fifa.vanluren.xyz";

export const URL_STRINGS = {
  BASE_URL,
  PLAYERS: "/players",
  SET_TEAM: "/set-team",
};

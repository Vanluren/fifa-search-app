import { Position } from "./Position";
export type Player = {
  id: string | number;
  name: string;
  club: string;
  image: string;
  nationality: string;
  position: Position;
  value: string;
};

import Card from "components/atoms/Card";
import Header from "components/atoms/Header";
import Mugshot from "components/atoms/Mugshot";
import React from "react";
import { Player } from "types";

const PlayerCard = ({ name, image, position, value, club }: Player) => {
  return (
    <div className="w-2/6 h-56 mx-4">
      <Card>
        <div className="flex flex-row">
          <Mugshot imageSrc={image} name={name} />
          <div className="flex flex-col ml-2">
            <Header size="sm">{club}</Header>
            <Header>{name}</Header>
          </div>
        </div>
        <div className="flex flex-col px-2 py-6 w-full">
          <div className="flex flex-row justify-between w-full">
            <Header size="sm">Position</Header>
            <Header size="md">{position}</Header>
          </div>
          <div className="flex flex-row justify-between w-full">
            <Header size="sm">Market Value</Header>
            <Header size="md">{value}</Header>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PlayerCard;

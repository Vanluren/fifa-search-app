import Card from "components/atoms/Card";
import Header from "components/atoms/Header";
import Mugshot from "components/atoms/Mugshot";
import React from "react";
import { Player } from "types";

const PlayerCard = ({ name, image, position, value, club }: Player) => {
  return (
    <div className="w-2/6 mx-4">
      <Card>
        <div className="flex flex-row">
          <Mugshot imageSrc={image} name={name} />
          <div className="flex flex-col ml-2">
            <Header size="sm">{club}</Header>
            <Header>{name}</Header>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PlayerCard;

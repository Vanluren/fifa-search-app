import Card from "components/atoms/Card";
import Header from "components/atoms/Header";
import Mugshot from "components/atoms/Mugshot";
import React from "react";
import { Player } from "types";

const PlayerCard = ({ name, age, image, position, value, club, overall }: Player) => {
  return (
    <div className="my-4">
      <Card>
        <div className="flex flex-row">
          <Mugshot imageSrc={image} name={name} />
          <div className="flex flex-col ml-2">
            <Header size="sm">{club}</Header>
            <Header>{name}</Header>
            <span className="text-gray-400 text">{age} Years</span>
          </div>
        </div>
        <div className="flex flex-col w-full px-2 py-6">
          <div className="flex flex-row justify-between w-full">
            <Header size="sm">Overall Score</Header>
            <Header size="md">{overall}</Header>
          </div>
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

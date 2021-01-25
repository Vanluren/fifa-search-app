import React, { ReactElement, useContext } from "react";
import { DataContext } from "context/Data";
import Header from "components/atoms/Header";

const ErrorCard = (): ReactElement => {
  const { error } = useContext(DataContext);
  return (
    <div>
      <Header>{error?.status ?? "Error!"}</Header>
      <Header size="sm">{error?.message}</Header>
    </div>
  );
};

export default ErrorCard;

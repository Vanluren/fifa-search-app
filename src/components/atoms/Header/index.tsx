import React, { ReactElement, ReactNode } from "react";

type Props = {
  size?: "lg" | "md" | "sm";
  children: ReactNode;
};
const Header = ({ size = "lg", children }: Props): ReactElement => {
  if (size === "sm") {
    return <div className="text-gray-500 text-xl capitalize">{children}</div>;
  } else if (size === "md") {
    return (
      <div className="text-indigo-500 text-2xl capitalize">{children}</div>
    );
  }
  return <div className="text-indigo-500 text-4xl capitalize">{children}</div>;
};

export default Header;

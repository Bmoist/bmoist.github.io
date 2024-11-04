import React, { ReactNode } from "react";
import HomeNav from "./HomeNavBar";
import PianoFrame from "./PianoFrame";

interface HomeNavWrapProps {
  children: ReactNode;
}

const HomeNavWrap: React.FC<HomeNavWrapProps> = ({ children }) => {
  return (
    <>
      <HomeNav />
      {children}
    </>
  );
};

export default HomeNavWrap;

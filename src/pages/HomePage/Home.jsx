import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne } from "./Data";

function Home(props) {
  return (
    <>
      <InfoSection {...homeObjOne} />
    </>
  );
}

export default Home;

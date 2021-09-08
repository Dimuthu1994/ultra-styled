import React from "react";
import { InfoSection } from "../../components";
import { homeObjThree } from "./Data";

function Home(props) {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Home;

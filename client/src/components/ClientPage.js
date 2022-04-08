import React from "react";
import Boxes from "./Boxes";
import Forms from "./Forms";

const ClientPage = (props) => {
  const { getLocation, getLoc, getData } = props;
  return (
    <>
      <Forms getLoc={getLoc} getData={getData} />
      <Boxes getLocation={getLocation} />
    </>
  );
};

export default ClientPage;

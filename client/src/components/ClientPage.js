import React from "react";
import Boxes from "./Boxes";
import Forms from "./Forms";

const ClientPage = (props) => {
  const { getLocation, getLoc } = props;
  return (
    <>
      <Forms getLoc={getLoc} />
      <Boxes getLocation={getLocation} />
    </>
  );
};

export default ClientPage;

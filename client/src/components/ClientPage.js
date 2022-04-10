import React from "react";
import MapBox from "./MapBox";
import Forms from "./Forms";

const ClientPage = (props) => {
  const { getLocation, getLoc, getData } = props;

  return (
    <>
      <Forms getLoc={getLoc} getData={getData} />
      <MapBox getLocation={getLocation} />
    </>
  );
};

export default ClientPage;

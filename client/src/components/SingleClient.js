import React from "react";
import MapBox from "./MapBox";
import { useLocation } from "react-router-dom";

const SingleClient = () => {
  const singleClient = useLocation();
  const data = singleClient.state.data;

  const getLocation = { latitude: data.latitude, longitude: data.longitude };
  return data ? (
    <>
      <div className="client">
        <h1>
          {data.name} ({data.time})
        </h1>
        <p>
          {data.phone}, <br /> {data.model}, <br />
          {data.color},<br /> {data.carnum},<br />
          {data.latitude}, {data.longitude}
        </p>
      </div>
      <MapBox getLocation={getLocation} />
    </>
  ) : null;
};

export default SingleClient;

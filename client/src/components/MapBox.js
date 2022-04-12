import React from "react";
import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";

const MapBox = (props) => {
  const { getLocation } = props;
  return (
    <div className="boxes">
      {getLocation.latitude ? (
        <div className="mapbox">
          LOCATION in MAP{" "}
          <i>{`${getLocation.latitude + " " + getLocation.longitude}`}</i>
          <YMaps>
            <Map
              defaultState={{
                center: [getLocation.latitude, getLocation.longitude],
                zoom: 13,
                controls: [],
              }}
            >
              <ZoomControl options={{ float: "right" }} />
              <Placemark
                geometry={[getLocation.latitude, getLocation.longitude]}
              />
            </Map>
          </YMaps>
        </div>
      ) : null}
      {/* {picture ? <div className="mapbox">PICTURE</div> : null} */}
    </div>
  );
};

export default MapBox;

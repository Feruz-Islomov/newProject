import React from "react";
import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";

const Boxes = (props) => {
  const { getLocation } = props;
  return (
    <div className="boxes">
      <div className="mapbox">
        LOCATION in MAP{" "}
        <i>{`${getLocation.latitude + " " + getLocation.longitude}`}</i>
        {getLocation.latitude ? (
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
        ) : null}
      </div>
      <div className="mapbox">PICTURE</div>
    </div>
  );
};

export default Boxes;

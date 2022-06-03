import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

export interface DisplayProps {
  latitudine: number;
  longitudine: number;
}

const Display = ({ latitudine, longitudine }: DisplayProps) => {
  return (
    <div className="wrapper">
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: latitudine, lng: longitudine }}
      />
    </div>
  );
};

export const Map = ({ latitudine, longitudine }: DisplayProps) => {
  const WrappedMap = withScriptjs(withGoogleMap(Display));

  return (
    <div
      className="Google Maps"
      style={{ marginTop: "30px", marginLeft: "200px" }}
    >
      <WrappedMap
        latitudine={latitudine}
        longitudine={longitudine}
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyAdAIsrEETSK6IpvtxVVf-HD8v2AWWN61Q&v=3.exp&libraries=geometry,drawing,places"
        }
        loadingElement={<div style={{ height: `700px`, width: "700px" }} />}
        containerElement={<div style={{ height: `700px`, width: "700px" }} />}
        mapElement={<div style={{ height: `700px`, width: "700px" }} />}
      />
    </div>
  );
};

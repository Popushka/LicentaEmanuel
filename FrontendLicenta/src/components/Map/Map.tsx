import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Display = () => {
  return (
    <div className="wrapper">
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 45.7494, lng: 21.2272 }}
      />
    </div>
  );
};

export const Map = (props: any) => {
  const WrappedMap = withScriptjs(withGoogleMap(Display));

  return (
    <div
      className="Google Maps"
      style={{ marginTop: "30px", marginLeft: "200px" }}
    >
      <WrappedMap
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

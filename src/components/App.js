import React, { useState, useEffect } from "react";
import "./style/App.css";
import ReactMapGl, { Marker } from "react-map-gl";

import ModalForm from "./ModalForm";

const App = () => {
  /** Variables */
  const accessToken =
    "pk.eyJ1Ijoic3VkaXB0YTA2NSIsImEiOiJja2NsemR4aDQxbGM0MnJzNTVobzZkN29nIn0.30CKjPytwhtJ0iL1F6SpMw";

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    zoom: 13,
    latitude: 23.81,
    longitude: 90.41,
  });
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [markerLatitude, setMarkerLatitude] = useState(0);
  const [markerLongitude, setMarkerLongitude] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  /* Function to get the Coordinates */

  const fetchCoordinate = (positon) => {
    let coordinates = positon.coords;

    let lati = coordinates.latitude;
    let longi = coordinates.longitude;

    setMarkerLatitude(lati);
    setMarkerLongitude(longi);
    setLongitude(longi);
    setLatitude(lati);
  };

  const error = (err) => {
    alert(
      `ERROR(${err.code}): ${err.message}.. Please allow to see the marker`
    );
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(fetchCoordinate, error);
  }, []);

  return (
    <div>
      <ReactMapGl
        {...viewport}
        className="mapContainer"
        mapStyle="mapbox://styles/sudipta065/ckex6gvru0swl19la3ozwr4ly"
        latitude={latitude}
        longitude={longitude}
        mapboxApiAccessToken={accessToken}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker
          latitude={markerLatitude}
          longitude={markerLongitude}
          className="marker"
        >
          <i
            className="fa fa-map-marker"
            aria-hidden="true"
            onClick={openModal}
          ></i>
        </Marker>
      </ReactMapGl>

      <ModalForm
        isOpen={isOpen}
        latitude={latitude}
        longitude={longitude}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default App;

import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import LocationPin from "../LocationPin";

const Map = ({ poi }) => {
  const [location, setLocation] = useState(poi);
  const [zoom, setZoom] = useState(15);
  useEffect(() => {
    setLocation(poi);
  }, [poi]);
  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBsW530Gbsr46TzvbiitSb0HCnqJyY8vU8" }}
        center={{
          lat: location.lat,
          lng: location.lon,
        }}
        defaultZoom={zoom}
        onZoomChanged={() => {
          setZoom(this.getZoom());
        }}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lon}
          name={location.name}
        />
      </GoogleMapReact>
    </div>
  );
};
export default Map;

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ name }) => (
  <>
    <Icon icon={locationIcon} style={{ fontSize: "2.5rem", color: "black" }} />
    <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{name}</p>
  </>
);

export default LocationPin;

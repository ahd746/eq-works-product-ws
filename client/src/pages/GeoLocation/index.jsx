import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoi } from "../../redux/actions/poi";
import Map from "../../components/Map";
import { Col, Form, Row } from "react-bootstrap";

const GeoLocation = () => {
  const poi = useSelector((state) => state.poi);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPoi());
  }, [dispatch]);
  const [value, setValue] = useState(1);
  return (
    <>
      <Row className="mb-3">
        <Col md={4}>
          <h3>Choose Location: </h3>
        </Col>
        <Col md={8}>
          <Form.Control
            as="select"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            {poi &&
              poi.map((location) => (
                <option key={location.poi_id} value={location.poi_id}>
                  {location.name}
                </option>
              ))}
          </Form.Control>
        </Col>
      </Row>
      {!poi.length ? <p>Loading...</p> : <Map poi={poi[value - 1]} />}
    </>
  );
};

export default GeoLocation;

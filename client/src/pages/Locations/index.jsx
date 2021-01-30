import { useEffect, useState } from "react";
import { Form, FormControl, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table";
import { getPoi, getSearchedPoi } from "../../redux/actions/poi";

const Locations = () => {
  const poi = useSelector((state) => state.poi);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getPoi());
  }, [dispatch]);

  return (
    <>
      <h3 className="my-3">Geographic coordinate:</h3>
      <Form className="my-4">
        <FormControl
          type="text"
          placeholder="Search location name or coordinate"
          className="d-inline w-75 mr-sm-2"
          onChange={(e) => {
            setSearch(e.target.value);
            dispatch(getPoi());
          }}
        />
        <Button
          style={{ marginTop: "-5px" }}
          variant="outline-success"
          onClick={() => {
            dispatch(getSearchedPoi(search));
          }}
        >
          Search
        </Button>
      </Form>
      {!poi ? <Spinner animation="border" /> : <Table locations={poi} />}
    </>
  );
};

export default Locations;

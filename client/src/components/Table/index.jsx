import TableComp from "react-bootstrap/Table";
import Row from "../Row";

const Table = ({ locations }) => {
  return (
    <>
      {!locations.length ? (
        <p className="text-center">No Location Found ...</p>
      ) : (
        <TableComp striped bordered variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Location</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <Row key={location.poi_id} location={location} />
            ))}
          </tbody>
        </TableComp>
      )}
    </>
  );
};

export default Table;

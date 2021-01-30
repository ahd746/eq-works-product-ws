const Row = ({ location }) => {
  return (
    <tr>
      <td>{location.poi_id}</td>
      <td>{location.name}</td>
      <td>{location.lat}</td>
      <td>{location.lon}</td>
    </tr>
  );
};

export default Row;

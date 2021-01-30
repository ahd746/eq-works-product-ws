import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="mb-4">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>EQ Work</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/locations">
              Locations
            </Nav.Link>
            <Nav.Link as={Link} to="/map">
              Map
            </Nav.Link>
            <NavDropdown title="Charts">
              <NavDropdown.Item as={Link} to="/hourly">
                Hourly
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/daily">
                Daily
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
   <div style={{ backgroundColor: "white" }}>
     <Navbar>
      <Container>
        <h1 className="display-5">Epsilon EMS</h1>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <button className="btn btn-primary me-2">Export Data</button>
            <button className="btn btn-outline-secondary">Logout</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  );
};

export default Header;

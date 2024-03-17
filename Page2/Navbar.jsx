import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav defaultActiveKey="/home" >
      <Nav.Link href="/home">Stream</Nav.Link>
      <Nav.Link eventKey="link-1">Classwork</Nav.Link>
      <Nav.Link eventKey="link-2">People</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default Navbar;
// import Nav from 'react-bootstrap/Nav';
// import "./Navbar.css"
// function Navbar() {
//   return (
//     <Nav
//       activeKey="/home"
//       onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
//     >
//       <Nav.Item>
//         <Nav.Link href="/home">Active</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-1">Link</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-2">Link</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="disabled" disabled>
//           Disabled
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default Navbar;


// import Nav from 'react-bootstrap/Nav';

// function ListExample() {
//   return (
//     <Nav defaultActiveKey="/home" as="ul">
//       <Nav.Item as="li">
//         <Nav.Link href="/home">Active</Nav.Link>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <Nav.Link eventKey="link-1">Link</Nav.Link>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <Nav.Link eventKey="link-2">Link</Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default ListExample;

import Nav from 'react-bootstrap/Nav';

function StackedExample() {
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

export default StackedExample;
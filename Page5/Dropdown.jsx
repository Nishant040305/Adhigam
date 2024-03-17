import React,{ useState } from "react";
// import "./component.css";
// import Page2 from "./Page2.jsx"
// import { Link } from 'react-router-dom';
// import "./classroom.css";
import './Dropdown.css';
import Nav from 'react-bootstrap/Nav';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

const SideBar = () => {
  return (
      <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Home</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Calendar</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Teaching</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              To Review
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large" >CSE Sec A</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">CSE Sec B</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">CSE Sec C</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            CSE Sec D
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">ECE Sec E</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">ECE Sec F</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Archived Classes
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large"> Settings</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">EEE Sec G</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            EEE Sec H
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  );
};


function Navbar() {
    return (
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Stream</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Classwork</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">People</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Grades
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }


  

function DropdownButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [showBox, setShowBox] = useState(false); // State to control the visibility of the box


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
    const handleAnchorClick1 = () => {
        setShowBox(true);
      };
      
        // const toggleDropdown1 = () => {
          
        // };
      
      
  

// function DropdownButton() {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleDropdown = () => {
//       setIsOpen(!isOpen);
//     };

  return (
    <div className="dropdown">
      <button id="dropdownBtn" onClick={toggleDropdown}>
      <div className="create-button-contents">
            <div> <h3>+ </h3>
                </div>
                <div className="part-2"><h4>Create</h4></div>
                </div>
      </button>
      {dropdownOpen && (
        <div className="dropdown-content" id="myDropdown">
          <a href="#" className="dropdown-text t1">Assignment</a>
          <br/>
          <a href="#" className="dropdown-text">Quiz</a>
          <br/>
          <a href="#" className="dropdown-text" onClick={handleAnchorClick1}>Material</a>
          <br/>
        </div>
        
      )}
      {/* Display the box when showBox state is true */}
      {showBox && <div className="dropdown-box">Box Content</div>}
      {dropdownOpen && (
        <div className="dropdown-backdrop" onClick={closeDropdown}></div>
      )}
    </div>
  );
};


const Dropdown=()=>{
    return (
      <div className="App">
  
  
      <div className="wrapper">
         <div className="container">
        <div className="flex">
        
        <div className="sidebar"><SideBar/></div>
        <div className="flex-column">
           <div className="navbar"><Navbar/></div>
           <hr />
           {/* <button className="create-button">
            <div className="create-button-contents">
            <div> <h3>+ </h3>
                </div>
                <div className="part-2"><h4>Create</h4></div>
                </div>
                </button> */}
                <div className="button-all-topics"> 
                <div >
                <DropdownButton/>
                </div>
                
                <div className="all-topics"><h3>
                    <div className="all-topics-content">
                    All Topics
                    </div>
                    </h3>
                    </div>
                </div>
                
        </div>
  
        </div>
          
         
        </div>
       </div>
     </div> 
  
    )
  }
  export default Dropdown;
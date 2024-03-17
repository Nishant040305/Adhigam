import React from "react";
// import "./component.css";
// import Page2 from "./Page2.jsx"
// import { Link } from 'react-router-dom';
// import "./classroom.css";
import './classroom.css';
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
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Metrics
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Metrics
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Metrics
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Metrics
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
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

const HomePage = () => {
    return (
      <div>
        <h1>Welcome to the Home Page!</h1>
        {/* <Link to="/otherpage"> */}
          <button>Go to Other Page</button>
        {/* </Link> */}
      </div>
    );
  };
const Dashboard = () => {
    return(
        <div className='yellow'>
            <div className="text-1 mt">Welcome Back!</div>
            {/* <div className="text-2 mt"><h2>Your Dashboard</h2></div> */}
            <div className='mt'><h2>Your Dashboard</h2></div>
            <div className="text-3 mt">But I must explain to you how all this mistaken idea of denouncing</div>
        </div>
    );
}

const Subject_name = (props) => {
    return (
        <div>
        {/* <Link to="/Page2.jsx"> */}
        <div className="subject-dashboard" style={{backgroundImage:`url(${props.image})` , textAlign:"left",fontSize:"larger",fontWeight:600 }}>
            
                {/* href="page2.html" */}
                {props.subject_n}
            
        </div>
         {/* </Link>  */}
         </div>
    );
};
const Teacher_name = (props) => {
    return (
        <div className="prof">{props.teacher_n}</div>
    );
};


const Classroom = (props) => {
    return (


        // <div className="classes">
            <div className="class-size" >
                <Subject_name className="subject" subject_n = {props.subject_n} image={props.image}/>
                <div className="class-size-down" style={{textAlign:"right"}}>
                <i class="material-icons" style={{fontSize:36}}>folder_open</i>
                </div>
            </div>
        // </div>
    );
};
const Homepage=()=>{
  return (
    <div className="App">


    <div className="wrapper">
       <div className="container">

         <div className="sidebar"><SideBar/></div>

        <div className='flex'>
        <div className='Dashboard'><Dashboard/></div>

         <div className="classes">

          <Classroom subject_n="Data Structures" teacher_n="Dr. Deepak Gupta" image="Honors.jpg"/>

           <Classroom subject_n=" Professional Communication" teacher_n="Dr. Jyotsna Sinha"image="Honors2.jpg"  />

           <Classroom subject_n="Health and Hygiene" teacher_n="Dr. Neha Alladuniv" image="Honors.jpg"/>
           <Classroom subject_n="Biotechnology" teacher_n="Dr. Monica" image="Honors2.jpg"/>
          <Classroom subject_n="Programming Paradigms" teacher_n="Dr. Neha Alladuniv"image="Honors.jpg" />
           <Classroom subject_n="Mathematics" teacher_n="Dr. Supriya Yadav" image="Honors3.jpg"/>

           <Classroom subject_n="Physics" teacher_n="Dr. Monica"image="Honors2.jpg" />
           <Classroom subject_n=" Environment and Climate Change" teacher_n="Dr. Palak Jain"image="Honors3.jpg" />
           <Classroom subject_n="Chemistry" teacher_n="Dr. Supriya Yadav"image="Honors3.jpg" />

         </div>

        </div>

      </div>
     </div>
   </div> 

  )
}
export default Homepage;
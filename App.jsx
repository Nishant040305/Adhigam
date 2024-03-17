import React from 'react';
import './index.css';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'boxicons/css/boxicons.min.css';         // Import Boxicons CSS
// import 'react-bootstrap-sidebar-menu/dist/sidebar-menu.scss'
// import './component_s/classroom.css';
import SideBar from './component_s/sidebar';

import Classroom from './component_s/Classroom';
import Dashboard from './component_s/dashboard';
// import { Route, Routes } from 'react-router-dom';
import Page from './component_s/Page3/Page3';
import Page2 from './component_s/Page2/Page2';
// import Page2 from './component_s/Page2';
// import Sidebar from './component_s/Sidebar'

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';


import Home from "./component_s/Page3/Home"
// import Login from "./component_s/Page3/Login"
// import Signup from "./component_s/Page3/Signup"
// import Page from "./component_s/Page3"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';




function App() {
  return (

    //  <div className="App">
    {/* <Page/> */ }


    //Page 3 code
    , {/* <Router>
     <Routes>
      <Route path="/" element={<Page/>}/>
      </Routes>
     </Router>
    </div>  */}





    //Page 1 Code
    // <div className="App">


    //   <div className="wrapper">
    //      <div className="container">

    //        <div className="sidebar"><SideBar/></div>

    //       <div className='flex'>
    //       <div className='Dashboard'><Dashboard/></div>

    //        <div className="classes">

    //         <Classroom subject_n="Data Structures" teacher_n="Dr. Deepak Gupta" image="Honors.jpg"/>

    //          <Classroom subject_n=" Professional Communication" teacher_n="Dr. Jyotsna Sinha"image="Honors2.jpg"  />

    //          <Classroom subject_n="Health and Hygiene" teacher_n="Dr. Neha Alladuniv" image="Honors.jpg"/>
    //          <Classroom subject_n="Biotechnology" teacher_n="Dr. Monica" image="Honors2.jpg"/>
    //         <Classroom subject_n="Programming Paradigms" teacher_n="Dr. Neha Alladuniv"image="Honors.jpg" />
    //          <Classroom subject_n="Mathematics" teacher_n="Dr. Supriya Yadav" image="Honors3.jpg"/>

    //          <Classroom subject_n="Physics" teacher_n="Dr. Monica"image="Honors2.jpg" />
    //          <Classroom subject_n=" Environment and Climate Change" teacher_n="Dr. Palak Jain"image="Honors3.jpg" />
    //          <Classroom subject_n="Chemistry" teacher_n="Dr. Supriya Yadav"image="Honors3.jpg" />

    //        </div>

    //       </div>

    //     </div>
    //    </div>
    //  </div> 




    //[Page 3 code]
    // ,<div>
    // <Page/>
    //   </div>


    //[Page 2 code]
    // ,<div>
    // <Page2/>
    //   </div>

    
  );
}

export default App;

import React from 'react';
import './index.css';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'boxicons/css/boxicons.min.css';         // Import Boxicons CSS
// import 'react-bootstrap-sidebar-menu/dist/sidebar-menu.scss'
// import './component_s/classroom.css';
// import SideBar from './component_s/sidebar';

// import Classroom from './component_s/Classroom';
// import Dashboard from './component_s/dashboard';
// import { Route, Routes } from 'react-router-dom';
import Page from './component_s/Page3/Page3';
import Page2 from './component_s/Page2/Page2';
// import Page2 from './component_s/Page2';
// import Sidebar from './component_s/Sidebar'

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Homepage from './component_s/Page1/Classroom';

import Home from "./component_s/Page3/Home"
// import Login from "./component_s/Page3/Login"
// import Signup from "./component_s/Page3/Signup"
// import Page from "./component_s/Page3"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Dropdown from './component_s/Page5/Dropdown';


import { useState } from 'react';




function App() {
  return (
    //  <div className="App">


    //Page 3 code
    //  <Routes>
    //   <Route path="/" element={<Homepage/>}/>
    //   </Routes>

//Page 5 code
     <Routes>
      <Route path="/" element={<Dropdown/>}/>
      </Routes>
   





    //Page 1 Code




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

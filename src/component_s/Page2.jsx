import React from 'react';
// import './index.css';
// import logo from './logo.svg';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
// import 'boxicons/css/boxicons.min.css';         // Import Boxicons CSS
// import 'react-bootstrap-sidebar-menu/dist/sidebar-menu.scss'
// import './component_s/Classroom'
// import './component_s/sidebar'
import Sidebar from './sidebar';
// import Classroom from './component_s/Classroom';
// import Sidebar from './component_s/Sidebar'
import Navbar from './Navbar';



function Page2() {
    return (
        <div className="wrapper">
            <div className="container">

                <div className="sidebar"><Sidebar /></div>
                 <div className="navbar"><Navbar/></div>
            </div>
        </div>
    );
};
export default Page2;
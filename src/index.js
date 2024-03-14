import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import './YourComponent.css'; // Import your component-specific CSS file
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css";
// import "https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'boxicons/css/boxicons.min.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//     document.addEventListener("DOMContentLoaded", function(event) {

//  const showNavbar = (toggleId, navId, bodyId, headerId) =>{
// const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId),
//     bodypd = document.getElementById(bodyId),
//     headerpd = document.getElementById(headerId)

//     // Validate that all variables exist
//     if(toggle && nav && bodypd && headerpd){
//       toggle.addEventListener('click', () => {
//         // show navbar
//         nav.classList.toggle('show')
//         // change icon
//         toggle.classList.toggle('bx-x')
//         // add padding to body
//         bodypd.classList.toggle('body-pd')
//         // add padding to header
//         headerpd.classList.toggle('body-pd')
//       })
//     }
// }

//     showNavbar('header-toggle','nav-bar','body-pd','header')

//     /*===== LINK ACTIVE =====*/
//     const linkColor = document.querySelectorAll('.nav_link')

//     function colorLink(){
// if(linkColor){
//       linkColor.forEach(l => l.classList.remove('active'))
// this.classList.add('active')
// }
// }
// linkColor.forEach(l=> l.addEventListener('click', colorLink))

// // Your code to run since DOM is loaded and ready
// });





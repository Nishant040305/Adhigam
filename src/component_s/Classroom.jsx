import React from "react";
// import "./component.css";
import Page2 from "./Page2.jsx"
// import { Link } from 'react-router-dom';

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
export default Classroom;
import React from "react";
import "./Assign.css"

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

const Assn_No = (props) => {
    return (
        <div>
        {/* <Link to="/Page2.jsx"> */}
        {/* <button className="assign_button"> */}
            
        <div className="assign-button" style={{backgroundImage:`url(${props.image})` , textAlign:"left",fontSize:"larger",fontWeight:500 }}>
            
            {/* href="page2.html" */}
            {props.assn_no}
        
    </div>
                {/* href="page2.html" */}
                
            
        {/* </button> */}
         {/* </Link>  */}
         </div>
    );
};
const Date = (props) => {
    return (
        <div className="date">{props.date}</div>
    );
};



const Assign = (props) => {
    return (


        // <div className="classes">
            <div className="assn_no h border margin-top">
                <Assn_No assn_no = {props.assn_no}/>
                
                <Date date = {props.date}/>
            </div>
        // </div>
    );
};
export default Assign;
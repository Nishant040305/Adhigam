import React from "react";
import "./Header.css";
const Header = (props) => {
    return(
        <div className="subject-dashboard" style={{backgroundImage:`url(${props.image})` , textAlign:"left",fontSize:"larger",fontWeight:600 }}>
        {/* <div className="subj-text"> */}
          <h1>
          {props.subject_n}
          </h1>
        {/* </div> */}
      </div>
    );
}
export default Header;
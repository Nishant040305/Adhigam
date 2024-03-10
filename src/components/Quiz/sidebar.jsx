import React from "react";

const Sidebar=(props)=>{
    return (
        <div className="quest-sidebar">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark nav-side">
            

                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href=""><button className="btn subject">physics</button></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href=""><button className="btn  subject">Mathematics</button></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href=""><button className="btn  subject">Chemistry</button></a>
                </li>
      
        </ul>
  </div>
        </nav>

        
            <div className="content-icon">
                {props.question.map((option,index) => {
                    if(option.colour==="#ffc107"){
                    return (
                        
                        <button className="icon" style={{backgroundColor:option.colour}}>
                            {index+1}
                        </button>
                    );}
                    if(option.colour==="#de00de80"){
                        return (
                            
                            <button className="icon" style={{backgroundColor:option.colour}}>
                                {index+1}
                            </button>
                        );}
                    if(option.colour==="white"){
                        return (
                            
                            <button className="icon" style={{backgroundColor:option.colour}}>
                                {index+1}
                            </button>
                        );}
                    else{
                        return (
                            
                            <button className="icon" style={{backgroundColor:option.colour, color:"white"}}>
                                {index+1}
                            </button>
                        );  
                    }
                })}
            </div>
        </div>
        
    );
}


export default Sidebar;
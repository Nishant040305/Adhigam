import React from "react";
const Navbar_expand=()=>{
    return(
        <div className="Navbar">
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark nav-full" style={{width: 280}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"></svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div><hr/>
        </div>
    );
}
const Student=()=>{
    return (
        <div className="student-profile">
                <img src="placeholder3.png" className="rounded-circle profile-pic" alt="Cinque Terre"></img>
                <h2 className="name">Nishant Mohan</h2>
                <h5 className="name-s">nishant040305</h5>
                <hr style={{marginBottom:40, marginTop:30}}></hr>
                <div className="data"><img src="balloon-128.png" className="data-img" /><div className="text">4 March 2005</div></div>
                <div className="data"><img src="college.png" className="data-img" /><div className="text">National Institute Of Technology</div></div>
                <div className="data"><div className="text"><img src="pin.png" className="data-img" />SVBH Boys Hostel MNNIT</div></div>
                <hr style={{marginTop:40}}></hr>
                <div><h4 style={{textAlign:"left", marginLeft:50}}>About</h4>
                <div className="bio" style={{textAlign:"left",marginLeft:50}}>
                State the name of the person you are making an introduction to. Inform them of your intent. State the name of the person who is being introduced. Offer additional information, as appropriate.
                    </div></div>
        </div>
    );
};

const Contents=()=>{
    return(
        <div className="contents">
            <div className="content-data">
            <Content image="images2.jpg" colour ="black"></Content>
            <Content  image="images.jpg" colour="white"></Content>
            <Content  image="download.jpg" colour ="black"></Content>
            <Content  image="images.jpg" colour = "white"></Content>
            <Content  image="image3.jpg" colour ="black"> </Content>
            <Content  image="im.jpg" colour="white"></Content>
            <Content  image="download.jpg" colour ="black"></Content>
            <Content image="images2.jpg" colour ="black"></Content>
            <Content  image="images.jpg" colour="white"></Content>
            <Content  image="download.jpg" colour ="black"></Content>
            <Content  image="images.jpg" colour = "white"></Content>
            <Content  image="image3.jpg" colour ="black"> </Content>
            <Content  image="im.jpg" colour="white"></Content>
            <Content  image="download.jpg" colour ="black"></Content>
            <Content image="images2.jpg" colour ="black"></Content>
            <Content  image="images.jpg" colour="white"></Content>
            <Content  image="download.jpg" colour ="black"></Content>
            <Content  image="images.jpg" colour = "white"></Content>
            <Content  image="image3.jpg" colour ="black"> </Content>
            <Content  image="im.jpg" colour="white"></Content>
            <Content  image="download.jpg" colour ="black"></Content>
            
            </div>
            <div className="content-info">
            <Performance></Performance>
            </div>
            
        </div>
    );
}
const Performance=()=>{
  return (
    <div className="performance-content">
      .
    </div>
  );
}
const Content=(props)=>{
    return(
        <div className="content">
            <div className="container" style={{backgroundImage:`url(${props.image})`, color:`${props.colour}`}}>
           COURSE

            </div>

        </div>
    );
}

const StudentProfile=()=>{
    return(
        <div className = "studentProfile" style={{backgroundImage:"url(studentprof.jpg)" , backgroundSize: "cover",}}>
          <div>
            .
          </div>
          <div>
          <div className="studentData " style={{backgroundColor:"#f3f3f3", borderRadius:20}}>
                <Student/>
                <Contents></Contents>
                <Navbar_expand></Navbar_expand>
            </div>
          </div>
            <div>.</div>
            
        </div>

    );
}

export default StudentProfile;

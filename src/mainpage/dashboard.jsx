import React, {useState,useEffect}from "react";
import './Sidebar.css';

// import "./component.css";
// import Page2 from "./Page2.jsx"
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useParams ,useNavigate} from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';



const Sidebar = (props) => {
  const navigate = useNavigate();
  const[joinForm,setJoinForm] = useState();
  const[createForm,setCreateForm] = useState();
  const handleChange=(e)=>{
    const { name, value } = e.target
    if(name=='joinForm'){
      setJoinForm(value);
    }
    if(name=='createForm'){
      setCreateForm(value);
    }
  }
  const Join= async (event) => {
      try {
        console.log(joinForm)
        event.preventDefault();
        const response = await fetch('http://localhost:5000/homepage/join', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept':"*/*",
          },
          
          body: JSON.stringify({id:props.id,joinForm:joinForm})
        }).then(response => response.json()).then(data=>{
          if(data.error){
              throw new Error(data.error);
          }
          else{
              navigate(`/homepage/${props.id}`);
          }
        }).catch (error=>{
              console.log(error.message)
            
        }) 
        
    }
    catch(err){
      console.log("Some error occured");
    }
  };
  
  const Create= async (event) => {
    try {
      event.preventDefault();
      const response = await fetch('http://localhost:5000/homepage/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept':"*/*",
        },
        body: JSON.stringify(props.id,createForm)
      }).then(response => response.json()).then(data=>{
        if(data.error){
            throw new Error(data.error);
        }
        else{
            let id = data.data.user.id;
            navigate(`/homepage/${id}`);
        }
      }).catch (error=>{
            console.log(error.message)
          
      }) 
      
  }
  catch(err){
    console.log("Some error occured");
  }
};

  return (
    <div className="sidebar">
      <h2 className="sidebar-title"></h2>
      <ul className="sidebar-list">
        <li className="sidebar-item"><Link to={`http://localhost:3000/profile/${props.id}`}>Profile</Link></li>
        <li className="sidebar-item"><Link to="http://localhost:3000/">Login</Link></li>
        <li className="sidebar-item">Join Course</li>
        <li className="sidebar-item" style={{width:400 , marginLeft:0}}><form className= "create-course-form" >
          <input className="sidebar-course"placeholder=" Join course" name='joinForm' value={joinForm}></input>
          <button type="submit" className="btn btn-success btn-create-side"  onClick={Join} onChange={handleChange}>Join</button>
          </form></li>
          <li className="sidebar-item">Create Course</li>

          <li className="sidebar-item" style={{width:400 , marginLeft:0}}><form className= "create-course-form">
          <input className="sidebar-course"placeholder=" Create course" name="createForm" value = {createForm} onChange={handleChange}></input>
          <button type="submit" className="btn btn-primary btn-create-side" onClick={Create}>Create</button>
          </form></li>
      </ul>
    </div>
  );
};



// const SideBar = () => {
//   return (
//       <CDBSidebar>
//         <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
//         <CDBSidebarContent>
//           <CDBSidebarMenu>
//             <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
//             <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
//             <CDBSidebarMenuItem icon="credit-card" iconType="solid">
//               Metrics
           
//             </CDBSidebarMenuItem>
//             <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
//             <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
//             <CDBSidebarMenuItem icon="credit-card" iconType="solid">
//               Metrics
//             </CDBSidebarMenuItem>
//             <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
//             <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
//             <CDBSidebarMenuItem icon="credit-card" iconType="solid">
//               Metrics
//             </CDBSidebarMenuItem>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             className="sidebar-btn-wrapper"
//             style={{padding: '20px 5px'}}
//           >
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//   );
// };

const Navbar=() =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand Navbar-homepage" href="#" style={{marginRight:124}}>Adhigam</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0 searchform" >
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
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
        <div className='homepage-yellow'>
            <div className="text-1 mt">Welcome Back!</div>
            {/* <div className="text-2 mt"><h2>Your Dashboard</h2></div> */}
            <div className='homepage-mt'><h2>Your Dashboard</h2></div>
            <div className="text-3 mt">But I must explain to you how all this mistaken idea of denouncing</div>
        </div>
    );
}


// const Subject_name = (props) => {
//     return (
        
            
        
//     );
// }

const Teacher_name = (props) => {
    return (
        <div className="homepage-prof">{props.teacher_n}</div>
    );
};


const Classroom = (props) => {
  const submit=()=>{
    // <Link
  }
    return (


        <div className="homepage-classes" onClick={submit}>
            <div className="homepage-class-size" >
            <div className="homepage-subject-dashboard" style={{backgroundImage:`url(/${props.image})`,backgroundSize:"cover",textAlign:"left",fontSize:"larger",fontWeight:600 }}>
                {props.subject_n}
            </div>
                <div className="homepage-class-size-down" style={{textAlign:"right"}}>
                </div>
            </div>
       </div>
    );
};
const Homepage = (props) => {
    const [courses, setCourses] = useState([]);
    let { id } = useParams();
  
    useEffect(() => {
      fetch('http://localhost:5000/homepage/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            throw new Error(data.error);
          } else {
            setCourses(data.courses);
            console.log(courses);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }, [id]);
  
    return (
      <div className="homepage-wrapper">
        <Navbar />
        <div className="homepage-container">
          <div className="homepage-sidebar"><Sidebar id={id} /></div>
          <div className='homepage-flex'>
          {courses.map((course, courseId) => {
  if (course) {
    return <Classroom key={courseId} subject_n={course.courseName} image="Honors.jpg" colour="black"></Classroom>
  }
})}


          </div>
        </div>
      </div>
    )
  }
  export default Homepage;
  
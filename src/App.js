import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Homepage from './mainpage/dashboard';
import RoomPage from './components/Home_video/room';
import Question from './components/Quiz/quiz_template';
import StudentProfile from './components/login_pages/student_profile';
import Sidebar from './component_s/sidebar';
import Login from './components_shib/login/login';
import Teacher from './components/Quiz/teacherQuiz';
import {useState} from "react";
import Fileupload from './components_shib/login/assignmentuppload';
import Page2 from './component_s/Page2/Page2';
import Dropdown from './component_s/dropdown.jsx';
// import { Router } from 'express';
// ... other imports ...

function App() {
  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
        {/* <Routes>
          <Route path="/" element={user && user._id ? <StudentProfile /> : <Login start="login" />} />
          <Route path="/" element={<Login start="login" />} />
          <Route path="/signup" element={<Login start="signup" />} />
          
        </Routes> */}
{/* 
<Routes>
        <Route path="/forget" element={<Login start="forget"></Login>}></Route>
        <Route path="/OTP" element={<Login start="OTP"></Login>}></Route>
        <Route path="/password" element={<Login start="passwd"></Login>}></Route>
        </Routes> */}

        <Routes>
        <Route path="/" element={<Login  start="login"></Login>}></Route>
        <Route path="/signup" element={<Login start="signup"></Login>}></Route>
        <Route path="/upload" element = {<Fileupload></Fileupload>}></Route>
        <Route path="/create" element={<Teacher></Teacher>}></Route> 
        <Route path='/profile/:id' element={<StudentProfile></StudentProfile>}></Route>
        <Route path='/quest' element ={<Question qtype='o' qtitle='Sample Question' ques='This image correspond to which library offered by javascript and facebook?' image="%PUBLIC_URL%/logo512.png"></Question>}></Route>
        <Route path="/homepage/:id" element={<Homepage></Homepage>} />
        <Route path="/Subject/" element= {<Page2></Page2>}></Route>
        <Route path="/subjectmain" element = {<Dropdown></Dropdown>}></Route>
         {/* <Route path='/home' element = {<Homepage/>}></Route> 
         <Route path = '/room/:' component = {<RoomPage/>}></Route>  */}
       </Routes> 
    </div>
  );
}

export default App;



      {/* <Routes> */}
        {/* <Route path="/" element={<Login  start="login"></Login>}></Route>
        <Route path="/signup" element={<Login start="signup"></Login>}></Route>
        <Route path="/forget" element={<Login start="forget"></Login>}></Route>
        <Route path="/OTP" element={<Login start="OTP"></Login>}></Route>
        <Route path="/password" element={<Login start="passwd"></Login>}></Route> */}

        {/* <Route path="/" element={<Teacher></Teacher>}></Route> */}
        {/* <Route path='/' element ={<Sidebar/>}></Route> */}
        {/* <Route path='/profile' element={<StudentProfile></StudentProfile>}></Route> */}
        {/* <Route path='/' element ={<Question qtype='o' qtitle='Sample Question' ques='This image correspond to which library offered by javascript and facebook?' image="%PUBLIC_URL%/logo512.png"></Question>}></Route> */}
         {/* <Route path='/' element = {<Homepage/>}></Route> 
         <Route path = '/room/:roomID' element = {<RoomPage/>}></Route>  */}
      {/* </Routes> */}
//     </div>

//   );
// }
// export default App;

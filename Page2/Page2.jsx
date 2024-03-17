// import logo from './logo.svg';
import { useState } from 'react';
import './Page2.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Card from './Card';
import Assign from './Assign';
import Header from "./Header";
function Page2() {
  const [count, setCount] = useState(0);
  return (
    <div className="wrapper">


      {/* <div className="App"> */}
      {/*{ <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* lec1 */}
      {/* <Navbar logoText = "CodeWithHarry"/>
    <div className='value'>
      {value}
    </div> */}
      {/* <div> Hi GUYS</div> */}
      {/* <button onClick={() => {setValue(value+1)}}>Click me</button>
<Footer/>
    </div> */}

      {/* lec2 */}
      {/* <Navbar />
      <main>
        This is my main content
      </main>
      <div className='cards'>
        <Card title="card1" description="card 1 desc"/>
        <Card title="card2" description="card 2 desc"/>
        <Card title="card3" description="card 3 desc"/>
        <Card title="card4" description="card 4 desc"/>
        
      </div>
      <Footer /> */}

      {/* lec3 */}
      {/* <div> The count is {count}</div>
      <button onClick={() => {setCount(count+1)}}>Update count</button> */}

      {/* play.tailwindcss.com  and tailblocks.cc  */}
      {/* <h1 class="text-3xl font-bold underline text-purple-500">
    Hello world!
  </h1> */}
      <div className="sidebar">

        <Sidebar />
      </div>
      
      <div className='right-section'>
      <div className='navbar'>

<Navbar />

</div>
        {/* <div className="subject-name border" style={{backgroundImage:`url({logo192.png})`}}>
          <div className="subj-text">
            <h1>
            B.Tech Data Structures
            </h1>
          </div>
        </div> */}
        <div><Header image="Honors3.jpg" subject_n="B.Tech Data Structures"/></div>
        <div className="right-contents">
          <div className="box-left border">
            <div className="text-1">Upcoming</div>
            <div className="text-2">Woohoo, no work due soon!</div>
            <button className="text-3">View all</button>
          </div>
          <div className="sub-content">
            <Assign assn_no="Announce something to the class" />
            <Assign assn_no="Assignment 2" date="Feb 12" />
            <Assign assn_no="Assignment 3" date="Feb 14" />
          </div>
        </div>


      </div>
    </div>

  );
}

// close tags with /
// return a wrapper div tag 
// use className instead of class 
export default Page2;

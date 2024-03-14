import React from 'react';
import './Page3.jsx'
import './Page3.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

const SideBar = () => {
  return (
    <CDBSidebar>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Metrics
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Metrics
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Metrics
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Metrics
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{ padding: '20px 5px' }}
        >
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

// const Middle = () => {
//   return (
//     <div className="right-section">
//       <div className="sub-section-left">
//         <div className="header">
//           <h1>
//             Assignment 2
//           </h1>
//         </div>
//         <div className="sub-header mb">
//           Jyoti Maurya | Feb 14
//         </div>
//         <div className="sub-header-child">
//           <div className="sub-header2 mb">
//             100 points
//           </div>
//           <div className="sub-header3">
//             Due Feb 19, 11:59 P.M.
//           </div>
//         </div>

//         <div class="documents mb">
//           Your Document
//         </div>
//       </div>
//     </div>
//   );
// }

const Page = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
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

      <div className="wrapper">
        {/* <div className="container"> */}

        <div className="sidebar"><SideBar /></div>
        <div className="right-section">
          {/* <div className="right"><Middle /></div> */}
          <div className="sub-section-left">
                    <div className="header">
                        <h1>
                            Assignment 2
                        </h1>
                    </div>
                    <div className="sub-header mb">
                       <h4>
                        Jyoti Maurya | Feb 14
                        </h4> 
                    </div>
                    <div className="sub-header-child">
                        <div className="sub-header2 mb">
                           <h4>
                            100 points
                            </h4> 
                        </div>
                        <div className="sub-header3">
                            <h4>
                              Due Feb 19, 11:59 P.M.
                              </h4>
                        </div>
                    </div>
                    
                    <div className="documents mb">
                        Your Document
                    </div>
                    <div className="comments ">
                        <div className="comment-head mb"><h5>
            Class Comments</h5></div>
                        <div >
                            <button className="comment-body">Add a class comment</button>
                        </div>
                    </div>
         
</div>
          <div className="sub-section-right">
            <div className="box-right mb mt">
              <div className="work">
                <div className="text-1 mb">
                 <h5>
                   Your Work
                  </h5>
                </div>
                <div className="work-doc">

                </div>
                <div className="work-submit">
                  <button className="submit-button1 mb">Add or Create</button>
                </div>
                <div className="work-submit">
                  <button className="submit-button2 mb">Mark as Done</button>
                </div>
                <div className="text-2">
                  Work cannot be turned in after the due date
                </div>
              </div>
            </div>

            <div className="pvt-com">
              <div className="pvt-com-head mb">
                Private comments
              </div>
              <div >
                <button className="pvt-com-body">Add comment to Jyoti Maurya</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Page;
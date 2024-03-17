import React from 'react';
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
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Details</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Home</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Calendar</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Teaching
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">To Review</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">Maths JEE</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">JEE Notes</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Enrolled
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">To-do</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">B.Tech Data Structures</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Data Structures Lab D
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">Programming Paradigms</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">ECC</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Archived Classes
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Settings
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  );
};

export default SideBar;


import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import "./Adminsidebar.css"

const Adminsidebar = () => {
  return (
    <Sidebar className="sidebar">
      <Menu className="menu">
        {/* Top section with icons */}
        <Link to="/adminhome" className="menu-link">
        <MenuItem className="menu-item" icon={<HomeOutlinedIcon />}>
         Home
        </MenuItem></Link>
        <Link to="/adminjob" className="menu-link">
        <MenuItem className="menu-item" icon={<WorkOutlineOutlinedIcon />}>
          Jobs
        </MenuItem></Link>
        <Link to="/admincompany" className="menu-link">
        <MenuItem className="menu-item" icon={<BusinessCenterOutlinedIcon />}>
          Companies
        </MenuItem></Link>
        <Link to="/addjob" className="menu-link">
        <MenuItem className="menu-item" icon={<AddCircleOutlineOutlinedIcon />}>
          Add Jobs
        </MenuItem></Link>

       
      </Menu>
    </Sidebar>
  );
};

export default Adminsidebar;

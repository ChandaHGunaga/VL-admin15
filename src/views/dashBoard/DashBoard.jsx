import React from 'react'

import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/sideBar/SideBar'
import TopBar from '../../components/topBar/TopBar'
import { adminStudentlistThunk } from '../../redux/reducers/AdminStudentlist'

const DashBoard = () => {


  return (
    <div className="dashBoard-container">
      <div className="dashBoard-sideBar">
        <SideBar />
      </div>
      <div className="dashBoard-topBar">
        <TopBar />
      </div>
      <Outlet />
    </div>
  )
}

export default DashBoard

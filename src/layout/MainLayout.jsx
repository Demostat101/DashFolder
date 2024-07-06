import React from 'react'
import '../layout/MainLayout.css'
import { Outlet } from 'react-router-dom'
import SideNavBar from '../components/navigation/sideNavBar/SideNavBar'
import TopNavBar from '../components/navigation/topNavBar/TopNavBar'

const MainLayout = () => {
  return (
    <div className='MainLayout'>
      <SideNavBar/>
      <div className="merge">
      <TopNavBar/>
      <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout

import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
   <AdminSidebar/>
<Outlet/>

    
    
    </>
  )
}

export default Layout
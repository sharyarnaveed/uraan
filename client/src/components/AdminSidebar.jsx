import React from 'react'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
   <>
    <aside class="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <Link to={"/adminpanel/"}>Dashboard</Link>
        <Link to={"/adminpanel/projects"}>Projects</Link>
        <Link to={"/adminpanel/approved"}>Approved Projects</Link>
        <Link href="not-approved.html">Not Approved Projects</Link>
      </nav>
    </aside>
   </>
  )
}

export default AdminSidebar
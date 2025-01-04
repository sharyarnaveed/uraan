import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./view/Home/Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './view/About/About'
import Layout from './Layout'
import Project from './view/Project/Project'
import Submit from './view/Submit/Submit'
import Cardpage from './view/Project/Cardpage'
import Detailproject from './view/Project/Detailproject'
import Signin from './view/Admin/Signin'
import AdminPanel from './view/Admin/AdminPanel'
import AdminLayout from './view/Admin/AdminLayout'
import AdminProject from './view/Admin/AdminProject'
import Approved from './view/Admin/Approved'
import AdminDetail from './view/Admin/AdminDetail'


const router=createBrowserRouter(
  
    [
      {
        path: '/',
        element: <Layout />,
        children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/aboutus',
          element: <About />,
        },
        {
          path: '/projects',
          element: <Project />,
        },
        {
          path: '/submit',
          element: <Submit/>,
        },
        {
          path: '/projectdisplay/:id',
          element: <Cardpage/>
        },
        {
          path: '/projectdetail/:id/:pid',
          element:<Detailproject/>,
        },
        {
          path: '/adminsignin',
          element:<Signin/>,
        } ,
         {
          path: '/adminpanel',
          element:<AdminLayout/>,
          children:[
            {
              path: '/adminpanel/',
              element:<AdminPanel/>
            },
            {
              path:"/adminpanel/projects",
              element:<AdminProject/>
            },
            {
              path:"/adminpanel/approved",
              element:<Approved/>
            },
            {
              path:"/adminpanel/projectdetail/:projectid",
              element:<AdminDetail/>
            }
          ]
        }
        ]
      }
    ]

)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

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

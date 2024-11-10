import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Regirster from './components/pages/Regirster';
import Layout from './components/pages/Layout'
import Contact from './components/pages/Contact';
import { FormContext } from './components/Context/Provider';


const route = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Regirster/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FormContext>
    <RouterProvider router={route}/>
   </FormContext>
  </StrictMode>,
)

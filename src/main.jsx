import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UniversityList from './components/universityLists.jsx';
import Courses from './components/Courses.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <UniversityList/>
  },
  {
    path: "/courses",
    element: <Courses/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

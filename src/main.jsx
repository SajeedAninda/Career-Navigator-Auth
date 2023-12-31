import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Blogs from './Components/Blogs.jsx'
import AppliedJobs from './Components/AppliedJobs.jsx'
import Statistics from './Components/Statistics.jsx'
import JobDetails from './Components/JobDetails.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import AuthProvider from '../Auth/AuthProvider.jsx'
import PrivateRoute from '../Auth/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/appliedjobs",
        loader: () => fetch(`/jobs.json`),
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/jobdetails/:id",
        loader: () => fetch(`/jobs.json`),
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './routes/Login.tsx';
import Signup from './routes/Signup.tsx';
import Dashboard from './routes/Dashboard.tsx';
import ProtectedRoute from './routes/ProtectedRoute.tsx';
import { AuthProvider } from './auth/authProvider.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)

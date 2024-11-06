import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import List from './Components/List';
import Login from './Components/Login';
import IptMenu from './Components/IptMenu';
import Res from './Components/Res';


const router = createBrowserRouter([
    {
      path: "/", element: <App />, children: [

     { path: "list", element: <List /> },
     { path: "login", element: <Login /> },
     { path: "res", element: <Res /> },
     { path: "iptMenu", element: <IptMenu /> }
      ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
   
  </React.StrictMode>
);


reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)

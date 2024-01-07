import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Context from "./utils/Context.jsx"
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(

  <Context>

<BrowserRouter>

    <App />
    <ToastContainer/>


</BrowserRouter>




  </Context>
)

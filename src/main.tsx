import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {AuthContext} from "./context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContext>
                <ToastContainer theme={'dark'} position={'top-right'} autoClose={3000} closeOnClick pauseOnHover={false}/>
                <App/>
            </AuthContext>
        </BrowserRouter>
    </React.StrictMode>,
)

import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "../login/login";
import React from "react";



export const router = createBrowserRouter([
    
    {
        path: '/',
        element: <LoginForm/>
    }

    
])
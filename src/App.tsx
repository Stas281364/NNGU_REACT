import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import React from "react"


export const App = () => {

    console.log("routerProvider");
    return <RouterProvider router={router}/>
}
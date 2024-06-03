import {createRoot} from "react-dom/client"
import { App } from "./App";
import React from "react";

const app = document.getElementById('app')

if(app)
{
    const root = createRoot(app);
    console.log('root render');
    root.render(<App/>);
}
else{
    alert("Ошибка");
}
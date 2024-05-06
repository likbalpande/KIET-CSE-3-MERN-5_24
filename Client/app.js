import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from './src/pages/homepage/homepage.js';
import ImageGenerator from './src/pages/imageGenerator/imageGenerator.js';
import HistoryPage from './src/pages/historyPage/historyPage.js';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Homepage />,
    },{
        path:'/image-generator',
        element:<ImageGenerator />,
    },{
        path:'/history',
        element:<HistoryPage />,
    }
]);

const App = () => {
    return <RouterProvider router={router} />
}

const domRoot = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(domRoot);
reactRoot.render(<App />);

console.log('hello');






















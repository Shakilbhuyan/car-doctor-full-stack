import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
    {
       path:'/',
       element:<MainLayout></MainLayout>,
       children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
       ]
    }
]);


export default router;
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/SignUp/Register";


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
        },
        {
            path:'/register',
            element:<Register></Register>
        }
       ]
    }
]);


export default router;
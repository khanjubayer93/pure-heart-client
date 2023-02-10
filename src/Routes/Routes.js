import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CreateService from "../Pages/CreateService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/createService',
                element: <CreateService></CreateService>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    }

])
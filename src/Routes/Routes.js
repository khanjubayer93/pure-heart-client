import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CreateService from "../Pages/CreateService";
import Donate from "../Pages/Donate";
import DonateDetails from "../Pages/DonateDetails";
import Home from "../Pages/Home/Home";
import ServiceDetailsCard from "../Pages/Home/ServiceDetailsCard";
import Services from "../Pages/Home/Services";
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
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/donate/:id',
                element: <Donate></Donate>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/donateDetails',
                element: <DonateDetails></DonateDetails>
            },
            {
                path: '/serviceDetailsCard/:id',
                element: <ServiceDetailsCard></ServiceDetailsCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            }


        ]
    }

])
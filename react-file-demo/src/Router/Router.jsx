import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";

const Router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/About',
                element:<About></About>
            },
            {
                path: '/Contact',
                element:<Contact></Contact>
            }

        ]
    }
])
export default Router;
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import ListedBooks from './../Pages/ListedBooks/ListedBooks';
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import SubscribeToUs from './../Pages/SubscribeToUs/SubscribeToUs';
import Review from './../Pages/Reviews/Review';
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children:[
        {
            path:'/',
            element:<Home/>

        },
        {
            path:'/listedBooks',
            element:<ListedBooks/>
        },
        {
            path:'/PagesToRead',
            element:<PagesToRead/>
        },{
            path:'/subscribe',
            element:<SubscribeToUs/>
        },{
            path:'/Reviews',
            element:<Review/>
        }
      ]
    },
  ]);
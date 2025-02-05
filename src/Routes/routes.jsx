import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import ListedBooks from './../Pages/ListedBooks/ListedBooks';
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import SubscribeToUs from './../Pages/SubscribeToUs/SubscribeToUs';
import Review from './../Pages/Reviews/Review';
import ErrorPage from "../Pages/Error/ErrorPage";
import SingleBookDetail from "../Pages/SingleBookDetail/SingleBookDetail";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>

        },
        {
            path:'/listedBooks',
            element:<ListedBooks/>,
            
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
        },
        {
            path:'/bookDetail/:bookId',
            element:<SingleBookDetail></SingleBookDetail>,
            loader:(()=>(fetch('/AllBooks.json')))
        },
        {
            path:'listedBooks/read/:bookId',
            element:<SingleBookDetail></SingleBookDetail>,
            loader:(()=>(fetch('./AllBooks.json'))),
        },{
            path:'wishlist/:bookId',
            element:<SingleBookDetail></SingleBookDetail>,
            loader:(()=>(fetch('./AllBooks.json'))),
        }
      ]
    },
  ]);
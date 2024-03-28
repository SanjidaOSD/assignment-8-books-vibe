import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import ReadPages from './Components/ReadPages/ReadPages.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import WishList from './Components/WishList/WishList.jsx';
import ReadList from './Components/ReadList/ReadList.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/books',
        element:<ListedBooks></ListedBooks>,
      },
      {
        path:'/read',
        element:<ReadPages></ReadPages>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/book/:bookId',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('/book.json'),
      },
      {
        path:'/books',
        element:<ListedBooks></ListedBooks>,
        loader:() => fetch('/book.json'),
        children: [
          {
            index: true,
            element: <ReadList></ReadList>,
          },
          {
            path: 'wish',
            element: <WishList></WishList>,
          }
        ],
      },
      {
        path:'/wishList',
        element:<WishList></WishList>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

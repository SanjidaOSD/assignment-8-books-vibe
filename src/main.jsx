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
        path:'./books',
        element:<ListedBooks></ListedBooks>
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
        path:'/list',
        element:<ListedBooks></ListedBooks>,
        loader:() => fetch('/book.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

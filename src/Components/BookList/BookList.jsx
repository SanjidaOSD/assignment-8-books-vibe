import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blist from "../Blist/Blist";


const BookList = () => {
   

const [bookList , setBookList] = useState([]);

console.log(bookList);

    useEffect(()=>{

const getDefaultBook = JSON.parse(localStorage.getItem('books')) || [];
setBookList(getDefaultBook);

    },[])

    return (
        <div>
            <h2>This is book list</h2>



            {/* <ul>
                {
                    bookList.map(book => <li key={book.bookId}>{book.bookName}</li>)
                }
            </ul> */}
            {
                bookList.map(book => <Blist key={book.bookId} book={book}></Blist>)
            }

           <div className="mt-16">
           <Link  className="bg-green-600 p-3 rounded-xl text-white font-bold mt-6" to='/home'>Go back to Home</Link>
           </div>
        </div>
    );
};

export default BookList;
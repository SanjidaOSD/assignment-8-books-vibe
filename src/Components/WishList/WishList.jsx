import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowWishList from "../ShowWishList/ShowWishList";



const WishList = () => {

    const [bookList, setBookList] = useState([]);

    // console.log(bookList);

    useEffect(() => {

        const getDefaultBook = JSON.parse(localStorage.getItem('books')) || [];
        setBookList(getDefaultBook);

    }, [])


    return (
        <div>
            <h2>This is WishList</h2>
            {
                bookList.map(book => <ShowWishList key={book.bookId}></ShowWishList>)
            }

{/* {
    bookList.map(book => <li key={book.bookId}>{book.bookName}</li>)
} */}

            <div className="mt-16">
                <Link  className="bg-green-600 p-3 rounded-xl text-white font-bold" to='/home'>Go back to Home</Link>
            </div>
        </div>
    );
};

export default WishList;
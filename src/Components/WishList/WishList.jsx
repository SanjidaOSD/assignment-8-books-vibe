import { useEffect, useState } from "react";
import ShowWishList from "../ShowWishList/ShowWishList";



const WishList = () => {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {

        const getDefaultBook = JSON.parse(localStorage.getItem('books')) || [];
        setBookList(getDefaultBook);

    }, [])


    return (
        <div>
            <h2>This is WishList</h2>
            {
                bookList.map(book => <ShowWishList key={book.bookId} book={book}></ShowWishList>)
            }
        </div>
    );
};

export default WishList;
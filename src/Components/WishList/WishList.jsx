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
        
            {
                bookList.map(book => <ShowWishList key={book.bookId} book={book}></ShowWishList>)
            }
        </div>
    );
};

export default WishList;
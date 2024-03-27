import { useEffect, useState } from "react";
import ShowReadList from "../ShowReadList/ShowReadList";


const ReadList = () => {
    const [bookList, setBookList] = useState([]);

    // console.log(bookList);

    useEffect(() => {

        const getDefaultBook = JSON.parse(localStorage.getItem('books')) || [];
        setBookList(getDefaultBook);

    }, [])


    return (
        <div>
            
            <ul>
              
                {
                    bookList.map(book => <ShowReadList key={book.bookId} book={book}></ShowReadList>)
                }
            </ul>

        </div>
    );
};

export default ReadList;
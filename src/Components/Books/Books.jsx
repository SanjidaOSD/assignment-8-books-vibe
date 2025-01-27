import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
const [books , setBooks] = useState([]);


useEffect(() =>{
    fetch('book.json')
    .then(res => res.json())
    .then(data => setBooks(data))
}, [])

    return (
        <div>
            <div className="mt-12">
                <h1 className="text-4xl font-bold"> Books</h1>
            </div>
            <div className="md:grid md:grid-cols-3 gap-4">
              {
                books.map(book => <Book key={book.id} book={book}></Book>)
              }
            </div>
        </div>
    );
};

export default Books;
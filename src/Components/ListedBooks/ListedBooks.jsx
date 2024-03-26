import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../Utility/localstorage";
import { IoIosArrowDown } from "react-icons/io";


const ListedBooks = () => {
    const books = useLoaderData();
    useEffect(() => {
        const storedBookIds = getStoredBookApplication();
        if (books.length > 0) {
            const readBooks = books.filter(book => storedBookIds.includes(book.id));
            console.log(books, storedBookIds, readBooks)
        }
    })
    return (
        <div>
            <div className="border-2 font-bold text-2xl p-4 bg-slate-200 rounded-full mt-4 mb-4">
            <h1>Books</h1>
            </div>

            <button className="btn bg-green-500">Sort By<IoIosArrowDown /></button>
        
            <div className="text-left">
                 <Link className="border-black border-l-2 border-t-2 p-2 font-bold">Read Books</Link>
                <button className="border-black border-l-2 border-b-2 p-2 font-bold">Wishlist</button>
                  <hr />
            </div>



            <div className="mt-6">
                <Link className="bg-green-600 p-3 rounded-xl text-white font-bold" to='/home'>Go back to Home</Link>
            </div>
        </div>
    );
};

export default ListedBooks;
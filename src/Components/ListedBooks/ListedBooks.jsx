
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import BookList from "../BookList/BookList";
import WishList from "../WishList/WishList";
import { useState } from "react";



const ListedBooks = () => {

    const [tabIndex , setTabIndex] = useState(0);



    return (
        <div>
            <div className="border-2 font-bold text-2xl p-4 bg-slate-200 rounded-full mt-4 mb-4">
                <h1>Books</h1>
            </div>

            <button className="btn bg-green-500">Sort By<IoIosArrowDown /></button>


            <div role="tablist" className="text-left tabs-lifted">
                <Link to=''
                onClick={() => setTabIndex(0)}
                 role="tab" className={`tab ${tabIndex === 0 ? 'tab-active' : 'tab'}`}>Read List</Link>
                <Link
                to= '/wish'
                 onClick={() => setTabIndex(1)}
                role="tab" className={`tab ${tabIndex === 1 ? 'tab-active' : 'tab'}`}>Wish List</Link>
            </div>
            <Outlet></Outlet>
            {/* <div className="text-left">
                 <Link to='/readList' className="border-black border-l-2 border-t-2 p-2 font-bold">Read Books</Link>
                 <Link to='/wishList' className="border-black border-l-2 border-b-2 p-2 font-bold">Wish List</Link>
                  
            </div> */}



            <div className="mt-6">
                <Link className="bg-green-600 p-3 rounded-xl text-white font-bold" to='/home'>Go back to Home</Link>
            </div>
        </div>
    );
};

export default ListedBooks;
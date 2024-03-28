
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";



const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="mb-16">
            <div className="border-2 font-bold text-2xl p-4 bg-slate-200 rounded-full mt-4 mb-4">
                <h1>Books</h1>
            </div>


            <details className="dropdown">
                <summary className="m-1 btn bg-green-500">Sort By<IoIosArrowDown /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-center">
                    <li><a>Rating</a></li>
                    <li><a>Number of Pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
            </details>


            <div role="tablist" className="text-left tabs-lifted">
                <Link
                    onClick={() => setTabIndex(0)}
                    role="tab" className={`tab font-bold ${tabIndex === 0 ? 'tab-active' : 'tab'}`}>Read List</Link>
                <Link
                    to={'wish'}
                    onClick={() => setTabIndex(1)}
                    role="tab" className={`tab font-bold ${tabIndex === 1 ? 'tab-active' : 'tab'}`}>Wish List</Link>
                <Outlet></Outlet>
            </div>
            <div className="mt-6">
                <Link className="bg-green-600 p-3 rounded-xl text-white font-bold" to='/home'>Go back to Home</Link>
            </div>
        </div>
    );
};

export default ListedBooks;
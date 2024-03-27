
import { Link } from "react-router-dom";
import BookImg from "../../assets/book.jpg";
import Books from "../Books/Books";



const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200 md:h-[550px] mt-6 rounded-xl p-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="h-[394px]" src={BookImg} />
                    <div className="md:text-start">
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <Link to={'/list'} className="btn bg-green-600 mt-16 md:mt-28 text-white font-bold">View The List</Link>
                    </div>
                </div>
            </div>

            <Books></Books>
           

        </div>


    );
};

export default Home;
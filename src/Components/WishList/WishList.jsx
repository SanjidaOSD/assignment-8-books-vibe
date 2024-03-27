import { Link } from "react-router-dom";


const WishList = () => {
    return (
        <div>
            <h2>This is WishList</h2>



            <div className="mt-16">
                <Link  className="bg-green-600 p-3 rounded-xl text-white font-bold" to='/home'>Go back to Home</Link>
            </div>
        </div>
    );
};

export default WishList;
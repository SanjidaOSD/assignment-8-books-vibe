import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!</h2>
            <div className="mt-6">

            <Link className="bg-green-600 p-3 rounded-xl text-white font-bold" to='/home'>Go back to Home</Link>
            </div>
        
        </div>
    );
};

export default ErrorPage;
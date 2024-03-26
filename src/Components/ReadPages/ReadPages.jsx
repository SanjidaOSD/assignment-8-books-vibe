import { Link } from "react-router-dom";


const ReadPages = () => {
    return (
        <div>
            <h1>This page is all ready readed</h1>
            <div className="mt-6">
            <Link className="bg-green-600 p-3 rounded-xl text-white font-bold" to='/home'>Go back to Home</Link>
            </div>
        </div>
    );
};

export default ReadPages;
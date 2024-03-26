
import BookImg from "../../assets/book.jpg";


const Home = () => {
    return (
        <div className="hero bg-base-200 md:h-[550px] mt-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BookImg} />
                <div className="md:text-start">
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-green-500 mt-16 md:mt-28">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
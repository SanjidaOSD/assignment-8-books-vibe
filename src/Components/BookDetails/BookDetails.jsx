import { Link, useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams();
    const book = books.find(book => book.bookId === bookId);
    const { bookName, author, review, tags, totalPages, publisher, yearOfPublishing, rating, image, category } = book
    // console.log(book);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img className="w-[500px] h-[500px] rounded-3xl" src={image} />
                    <div className="ml-16 text-left">
                        <h1 className="text-5xl font-bold mb-4">{bookName}</h1>
                        <p className="mb-4 justify-start">{author}</p>
                        <hr />
                        <p className="mb-4">{category}</p>
                        <hr />
                        <p className="mb-4"><span className="text-xl font-bold">Review :</span> {review}.</p>
                        <div className='justify-between mb-4'> <span className="text-xl font-bold">Tag :</span>

                            <button className="btn btn-xs text-green-600 mr-14">#{book.tags[0]}</button>
                            <button className="btn btn-xs text-green-600">#{book.tags[1]}</button>
                        </div>

                        <hr />
                        <div className="text-left">
                            <div className="flex justify-between items-center">
                                <p className="mt-4">Number of Pages : </p>
                                <p className="md:mr-72 text-xl font-bold"> {totalPages}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Publisher :</p>
                                <p className="mr-24 text-xl font-bold"> {publisher}.</p>
                            </div>
                           <div className="flex justify-between items-center">
                           <p>Year of Publishing : </p>
                            <p className="mr-[275px] text-xl font-bold">{yearOfPublishing}</p>
                           </div>
                           <div className="flex justify-between items-center">
                           <p>Rating :</p>
                            <p className="mr-72 text-xl font-bold"> {rating}</p>
                           </div>
                        </div>
                        <div className="mt-16">
                            <Link className="bg-[#2a6e93] p-3 mr-8  rounded-xl text-white font-bold" to='/home'>Read...</Link>
                            <Link className="bg-[#29769f] p-3 rounded-xl text-white font-bold" to='/home'>Wishlist</Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-6">
                <Link className="bg-green-600 p-3 rounded-xl text-white font-bold" to='/home'>Go back to Home</Link>
            </div>
        </div>
    );
};

export default BookDetails;
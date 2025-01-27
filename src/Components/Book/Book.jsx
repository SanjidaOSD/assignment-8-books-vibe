// import Books from "../Books/Books";
import PropTypes from 'prop-types';
import { IoMdStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';



const Book = ({ book }) => {
    const {bookId, bookName, author, image, category, rating} = book
    return (
        <Link to={`/book/${bookId}`}>

            <div className="card h-auto bg-base-100 shadow-xl">
                <figure><img className='h-[230px] w-[326px]' src={image} alt="Book" /></figure>
                <div className="card-body">
                    <div className='justify-between mb-4'>
                        {/* <TagsComponent tags={book.tags} /> */}
                        <button className="btn btn-xs text-green-600 mr-14">{book.tags[0]}</button>
                        <button className="btn btn-xs text-green-600">{book.tags[1]}</button>
                    </div>
                    <div className='text-center items-center'>
                        <h2 className="card-title text-center text-2xl font-bold">{bookName}</h2>
                        <p className='text-center mt-4'>By: {author}</p>
                    </div>
                    <hr />
                    <div className='flex gap-40'>
                        <p>{category}</p>
                        <div className='flex items-center'>
                        <p>{rating}</p>
                            <IoMdStarOutline className='text-2xl'></IoMdStarOutline>
                       
                        </div>
                    </div>
                </div>
                
            </div>
            </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
};
export default Book;
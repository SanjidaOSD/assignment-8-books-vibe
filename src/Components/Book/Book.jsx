// import Books from "../Books/Books";
import PropTypes from 'prop-types';
import TagsComponent from "../Tags/Tag";


const Book = ({ book }) => {
    const { bookName, author, image, category, rating, tags } = book
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='justify-between'>
                        {/* <TagsComponent tags={book.tags} /> */}
                        <button className="btn btn-xs mr-14">{book.tags[0]}</button>
                        <button className="btn btn-xs">{book.tags[1]}</button>
                    
                    </div>

                    <div className='text-center items-center'>
                        <h2 className="card-title text-center text-2xl font-bold">{bookName}</h2>
                        <p className='text-center'>By: {author}</p>
                    </div>
                    <hr />
                    <div className='flex'>
                        <p>{category}</p>
                        <div>
                        <p>{rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
};
export default Book;
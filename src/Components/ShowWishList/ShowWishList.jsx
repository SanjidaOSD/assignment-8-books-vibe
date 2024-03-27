import PropTypes from 'prop-types';
import { FiMapPin } from "react-icons/fi";
import { IoIosContacts } from "react-icons/io";
import { MdOutlineFindInPage } from "react-icons/md";

const ShowWishList = ({book}) => {
    const { bookName, author, totalPages, publisher, rating, yearOfPublishing, image } = book;

    return (
        <div>

            <div className="border w rounded-2xl">
                <div className="hero-content flex-col lg:flex-row text-left items-start mr-80">
                    <img src={image} className="max-w-sm h-[230px] w-[228px] rounded-lg items-start text-left" />
                    <div>
                        <h1 className="text-3xl font-bold">{bookName}</h1>
                        <p>By : {author}</p>
                        <div className='md:flex text-center items-center md:gap-12'>
                            <div className='justify-between mb-4'> <span className=" font-bold">Tag :</span>
                                <button className="btn btn-xs text-green-600 mr-14">#{book.tags[0]}</button>
                                <button className="btn btn-xs text-green-600">#{book.tags[1]}</button>
                            </div>
                            <p className="py-6 flex text-center items-center gap-2"><FiMapPin /> Year of the publishing : {yearOfPublishing}</p>
                        </div>
                        <div className='md:flex text-center items-center md:gap-12'>
                            <p className='flex text-center items-center gap-2'><IoIosContacts />Publisher : {publisher}</p>
                            <p className='flex text-center items-center gap-2'><MdOutlineFindInPage />Pages : {totalPages}</p>
                        </div>
                        <div className='flex gap-5'>
                            <button className='p-2 bg-blue-100 text-blue-700 rounded-full'><small>Category: Classic</small></button>
                            <button className='p-2 bg-orange-100 text-orange-700 rounded-full'><small>Rating:{rating}</small></button>
                            <button className='p-2 bg-green-100 text-green-700 rounded-full'><small>View Details</small></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShowWishList.propTypes = {
    book: PropTypes.object.isRequired
};

export default ShowWishList;
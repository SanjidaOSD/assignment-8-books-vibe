import PropTypes from 'prop-types';


const Blist = ({book}) => {
    return (
        <div>
            <h1>{book.bookName}</h1>
        </div>
    );
};

Blist.propTypes = {
    book: PropTypes.object.isRequired
};

export default Blist;
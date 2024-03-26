import PropTypes from 'prop-types';

const TagsComponent = ({ tags }) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  );
};

TagsComponent.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagsComponent;
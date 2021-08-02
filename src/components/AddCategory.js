import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue.trim().length > 2
      ? setCategories((cat) => [inputValue, ...cat])
      : alert('Text too short!');
    setInputValue('');
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search your GIF"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
